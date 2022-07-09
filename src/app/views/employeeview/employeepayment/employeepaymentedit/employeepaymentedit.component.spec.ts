import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeepaymenteditComponent } from './employeepaymentedit.component';

describe('EmployeepaymenteditComponent', () => {
  let component: EmployeepaymenteditComponent;
  let fixture: ComponentFixture<EmployeepaymenteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeepaymenteditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeepaymenteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
