import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeexpensesdetailComponent } from './peexpensesdetail.component';

describe('PeexpensesdetailComponent', () => {
  let component: PeexpensesdetailComponent;
  let fixture: ComponentFixture<PeexpensesdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeexpensesdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeexpensesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
