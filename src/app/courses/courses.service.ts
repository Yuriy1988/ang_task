import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { filter, scan, startWith, switchMap, first, debounceTime, map, debounce, timeout } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { Course } from '../shared/interfaces/course.model';
import { ConfirmModalService } from '../shared/ui-components/confirm-modal/confirm-modal.service';
import { interval } from 'rxjs/internal/observable/interval';
import { Author } from '../shared/interfaces/author.model';

const debounce_time = 300;
const minSearchLength = 2;

@Injectable()
export class CoursesService {

  private baseUrl = 'courses';
  pagination = new Subject();

  constructor(
    private confirmModalService: ConfirmModalService,
    private httpClient: HttpClient,
  ) { }

  findCourse(query): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.baseUrl}/?textFragment=${query}`);
  }

  fetchAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>('authors');
  }

  fetchCourses(start = 0, count = 5): Observable<Course[]> {
    return this.httpClient
      .get<Course[]>(`${this.baseUrl}/?start=${start}&count=${count}`);
  }

  addCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(this.baseUrl, course);
  }

  getCourseById(id: string): Observable<Course> {
    return this.httpClient.get<Course>(`${this.baseUrl}/${id}`);
  }

  updateCourse(id: number, course: Course): Observable<Course> {
    return this.httpClient.patch<Course>(`${this.baseUrl}/${id}`, course);
  }

  loadMore(): void {
    this.pagination.next();
  }

  confirmDeletion(id): Observable<string> {
    return this.confirmModalService
      .open()
      .pipe(
        filter(Boolean),
        first(),
        map(() => id),
      );
  }

  private deleteCourse(id: string): Observable<Course> {
    return this.httpClient.delete<Course>(`${this.baseUrl}/${id}`);
  }
}

