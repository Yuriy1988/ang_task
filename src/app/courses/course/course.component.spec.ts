import { CourseComponent } from './course.component';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CourseComponent', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    }).compileComponents();
  }));

  it('should create the course component', (() => {
    const fixture = TestBed.createComponent(CourseComponent);
    const course = fixture.debugElement.componentInstance;
    expect(course).toBeTruthy();
  }));

  it('should render appropriate course', (() => {
    const fixture = TestBed.createComponent(CourseComponent);
    const courseComponent = fixture.debugElement.componentInstance;
    const debugEl  = fixture.debugElement.query(By.css('.text-justify'));
    const descriptionEl = debugEl.nativeElement;
    const expectedCourse = { description: 'Test description' };
    courseComponent.course = expectedCourse;
    fixture.detectChanges();
    expect(descriptionEl.textContent).toContain(expectedCourse.description);
  }));
});
