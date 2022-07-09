import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvexpensesdetailComponent } from './rvexpensesdetail.component';

describe('RvexpensesdetailComponent', () => {
  let component: RvexpensesdetailComponent;
  let fixture: ComponentFixture<RvexpensesdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvexpensesdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvexpensesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
