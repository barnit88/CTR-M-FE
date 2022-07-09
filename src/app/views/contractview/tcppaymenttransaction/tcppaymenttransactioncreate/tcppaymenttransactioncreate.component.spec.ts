import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcppaymenttransactioncreateComponent } from './tcppaymenttransactioncreate.component';

describe('TcppaymenttransactioncreateComponent', () => {
  let component: TcppaymenttransactioncreateComponent;
  let fixture: ComponentFixture<TcppaymenttransactioncreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcppaymenttransactioncreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcppaymenttransactioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
