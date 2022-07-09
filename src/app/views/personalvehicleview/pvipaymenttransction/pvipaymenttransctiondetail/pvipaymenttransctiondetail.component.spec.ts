import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvipaymenttransctiondetailComponent } from './pvipaymenttransctiondetail.component';

describe('PvipaymenttransctiondetailComponent', () => {
  let component: PvipaymenttransctiondetailComponent;
  let fixture: ComponentFixture<PvipaymenttransctiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvipaymenttransctiondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvipaymenttransctiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
