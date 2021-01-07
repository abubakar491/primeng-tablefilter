import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPickListComponent } from './data-pick-list.component';

describe('DataPickListComponent', () => {
  let component: DataPickListComponent;
  let fixture: ComponentFixture<DataPickListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPickListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
