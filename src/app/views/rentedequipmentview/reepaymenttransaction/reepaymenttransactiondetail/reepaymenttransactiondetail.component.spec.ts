import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReepaymenttransactiondetailComponent } from './reepaymenttransactiondetail.component';

describe('ReepaymenttransactiondetailComponent', () => {
  let component: ReepaymenttransactiondetailComponent;
  let fixture: ComponentFixture<ReepaymenttransactiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReepaymenttransactiondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReepaymenttransactiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
