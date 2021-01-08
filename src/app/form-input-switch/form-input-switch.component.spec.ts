import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputSwitchComponent } from './form-input-switch.component';

describe('FormInputSwitchComponent', () => {
  let component: FormInputSwitchComponent;
  let fixture: ComponentFixture<FormInputSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
