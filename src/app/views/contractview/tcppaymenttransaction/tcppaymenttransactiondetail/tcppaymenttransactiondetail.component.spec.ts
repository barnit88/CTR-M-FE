import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcppaymenttransactiondetailComponent } from './tcppaymenttransactiondetail.component';

describe('TcppaymenttransactiondetailComponent', () => {
  let component: TcppaymenttransactiondetailComponent;
  let fixture: ComponentFixture<TcppaymenttransactiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcppaymenttransactiondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcppaymenttransactiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
