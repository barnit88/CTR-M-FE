import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourlistComponent } from './labourlist.component';

describe('LabourlistComponent', () => {
  let component: LabourlistComponent;
  let fixture: ComponentFixture<LabourlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabourlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabourlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
