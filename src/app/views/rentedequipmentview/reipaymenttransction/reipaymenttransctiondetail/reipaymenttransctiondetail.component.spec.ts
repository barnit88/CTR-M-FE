import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReipaymenttransctiondetailComponent } from './reipaymenttransctiondetail.component';

describe('ReipaymenttransctiondetailComponent', () => {
  let component: ReipaymenttransctiondetailComponent;
  let fixture: ComponentFixture<ReipaymenttransctiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReipaymenttransctiondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReipaymenttransctiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
