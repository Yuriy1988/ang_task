import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { filter, scan, startWith, switchMap, first, debounceTime, map, debounce, timeout } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { Course } from '../shared/interfaces/course.model';
import { ConfirmModalService } from '../shared/ui-components/confirm-modal/confirm-modal.service';
import { interval } from 'rxjs/internal/observable/interval';

const debounce_time = 300;
const minSearchLength = 2;

@Injectable()
export class CoursesService {
  static startFromCourseIndex = 0;
  static coursesPerPage = 5;

  private baseUrl = 'courses';
  pagination = new Subject();

  constructor(
    private confirmModalService: ConfirmModalService,
    private httpClient: HttpClient,
  ) { }

  findCourse(query: Observable<string>): Observable<Observable<Course[]>> {
    return query.pipe(
      filter(q => q && q.length > minSearchLength || !q),
      debounce(() => interval(debounce_time)),
      map((q) => {
        console.log(q);
        if (!q) {
          return this.getCourses();
        }
        return this.httpClient.get<Course[]>(`${this.baseUrl}/?textFragment=${q}`);
      })
    );
  }

  getCourses(): Observable<Course[]> {
    return this.pagination.pipe(
      startWith([CoursesService.startFromCourseIndex, CoursesService.coursesPerPage]),
      scan((acc: [number, number]): [number, number] => {
        return [acc[0] + CoursesService.coursesPerPage, CoursesService.coursesPerPage];
      }),
      switchMap(([start, count]: [number, number]): Observable<Course[]> => this.httpClient
        .get<Course[]>(`${this.baseUrl}/?start=${start}&count=${count}`)
      ),
      scan((acc: Course[], received: Course[]): Course[] => {
        return acc.concat(received);
      }),
    );
  }

  addCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(this.baseUrl, course);
  }

  getCourseById(id: string): Observable<Course> {
    return this.httpClient.get<Course>(`${this.baseUrl}/${id}`);
  }

  updateCourse(id: string, course: Course): Observable<Course> {
    return this.httpClient.patch<Course>(`${this.baseUrl}/${id}`, course);
  }

  loadMore(): void {
    this.pagination.next();
  }

  confirmDeletion(id): Observable<Course> {
    return this.confirmModalService
      .open()
      .pipe(
        filter(Boolean),
        first(),
        switchMap(() => this.deleteCourse(id)),
      );
  }

  private deleteCourse(id: string): Observable<Course> {
    return this.httpClient.delete<Course>(`${this.baseUrl}/${id}`);
  }
}

