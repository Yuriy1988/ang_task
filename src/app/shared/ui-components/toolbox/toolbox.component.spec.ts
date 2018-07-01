import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ToolboxComponent } from './toolbox.component';

describe('ToolboxComponent', () => {
  let component: ToolboxComponent;
  let fixture: ComponentFixture<ToolboxComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ToolboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should rise find event', () => {
    fixture.detectChanges();
    let expectedQuery: string;
    const findInputEl: HTMLInputElement = fixture.nativeElement.querySelector('input');
    findInputEl.value = 'test string';

    findInputEl.dispatchEvent(new Event('input'));
    component.find.subscribe((query: string): void => {
      expectedQuery = query;
    });
    const findBtn = fixture.debugElement.query(By.css('.btn-outline-primary'));
    findBtn.triggerEventHandler('click', undefined);

    expect(expectedQuery).toBe(findInputEl.value);
  });

  it('should rise add event', () => {
    fixture.detectChanges();
    const addSpy = spyOn(component.add, 'emit');
    const addBtn = fixture.debugElement.query(By.css('.btn-primary'));
    addBtn.triggerEventHandler('click', undefined);

    expect(addSpy).toHaveBeenCalled();
  });
});
