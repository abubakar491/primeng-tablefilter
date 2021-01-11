import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayConfirmDialogComponent } from './overlay-confirm-dialog.component';

describe('OverlayConfirmDialogComponent', () => {
  let component: OverlayConfirmDialogComponent;
  let fixture: ComponentFixture<OverlayConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
