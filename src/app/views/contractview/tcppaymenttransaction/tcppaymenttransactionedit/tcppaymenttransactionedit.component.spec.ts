import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcppaymenttransactioneditComponent } from './tcppaymenttransactionedit.component';

describe('TcppaymenttransactioneditComponent', () => {
  let component: TcppaymenttransactioneditComponent;
  let fixture: ComponentFixture<TcppaymenttransactioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcppaymenttransactioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcppaymenttransactioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
