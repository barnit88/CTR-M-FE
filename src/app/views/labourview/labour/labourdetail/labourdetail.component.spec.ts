import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourdetailComponent } from './labourdetail.component';

describe('LabourdetailComponent', () => {
  let component: LabourdetailComponent;
  let fixture: ComponentFixture<LabourdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabourdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabourdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
