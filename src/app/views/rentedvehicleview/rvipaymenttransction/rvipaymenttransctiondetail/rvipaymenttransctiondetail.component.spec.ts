import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvipaymenttransctiondetailComponent } from './rvipaymenttransctiondetail.component';

describe('RvipaymenttransctiondetailComponent', () => {
  let component: RvipaymenttransctiondetailComponent;
  let fixture: ComponentFixture<RvipaymenttransctiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvipaymenttransctiondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvipaymenttransctiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
