import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReexpensesdetailComponent } from './reexpensesdetail.component';

describe('ReexpensesdetailComponent', () => {
  let component: ReexpensesdetailComponent;
  let fixture: ComponentFixture<ReexpensesdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReexpensesdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReexpensesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
