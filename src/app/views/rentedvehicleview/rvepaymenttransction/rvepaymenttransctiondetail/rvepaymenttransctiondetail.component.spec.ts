import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvepaymenttransctiondetailComponent } from './rvepaymenttransctiondetail.component';

describe('RvepaymenttransctiondetailComponent', () => {
  let component: RvepaymenttransctiondetailComponent;
  let fixture: ComponentFixture<RvepaymenttransctiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvepaymenttransctiondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvepaymenttransctiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
