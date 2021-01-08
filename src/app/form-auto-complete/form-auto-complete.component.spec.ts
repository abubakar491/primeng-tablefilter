import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAutoCompleteComponent } from './form-auto-complete.component';

describe('FormAutoCompleteComponent', () => {
  let component: FormAutoCompleteComponent;
  let fixture: ComponentFixture<FormAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAutoCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
