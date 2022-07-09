import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PebpaymenttransctiondetailComponent } from './pebpaymenttransctiondetail.component';

describe('PebpaymenttransctiondetailComponent', () => {
  let component: PebpaymenttransctiondetailComponent;
  let fixture: ComponentFixture<PebpaymenttransctiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PebpaymenttransctiondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PebpaymenttransctiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
