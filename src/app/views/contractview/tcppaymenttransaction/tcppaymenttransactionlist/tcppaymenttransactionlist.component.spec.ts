import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcppaymenttransactionlistComponent } from './tcppaymenttransactionlist.component';

describe('TcppaymenttransactionlistComponent', () => {
  let component: TcppaymenttransactionlistComponent;
  let fixture: ComponentFixture<TcppaymenttransactionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcppaymenttransactionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcppaymenttransactionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
