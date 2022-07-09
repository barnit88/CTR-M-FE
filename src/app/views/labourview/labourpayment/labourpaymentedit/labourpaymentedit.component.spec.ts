import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourpaymenteditComponent } from './labourpaymentedit.component';

describe('LabourpaymenteditComponent', () => {
  let component: LabourpaymenteditComponent;
  let fixture: ComponentFixture<LabourpaymenteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabourpaymenteditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabourpaymenteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
