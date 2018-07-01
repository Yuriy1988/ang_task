import { CourseListComponent, courses } from './course-list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CourseListComponent', () => {
  let fixture: ComponentFixture<CourseListComponent>;
  let component: CourseListComponent;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseListComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    }).compileComponents();
  }));

  beforeEach((() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the course list', (() => {
    expect(component).toBeTruthy();
  }));

  it('should set the course list on init', (() => {
    fixture.detectChanges();
    expect(component.courses).toEqual(courses);
  }));
});
