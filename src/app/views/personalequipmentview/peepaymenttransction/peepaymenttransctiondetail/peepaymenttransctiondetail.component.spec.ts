import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeepaymenttransctiondetailComponent } from './peepaymenttransctiondetail.component';

describe('PeepaymenttransctiondetailComponent', () => {
  let component: PeepaymenttransctiondetailComponent;
  let fixture: ComponentFixture<PeepaymenttransctiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeepaymenttransctiondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeepaymenttransctiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
