import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminationDialogComponent } from './termination-dialog.component';

describe('TerminationDialogComponent', () => {
  let component: TerminationDialogComponent;
  let fixture: ComponentFixture<TerminationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminationDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
