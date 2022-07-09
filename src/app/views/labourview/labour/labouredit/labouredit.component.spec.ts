import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboureditComponent } from './labouredit.component';

describe('LaboureditComponent', () => {
  let component: LaboureditComponent;
  let fixture: ComponentFixture<LaboureditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboureditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboureditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
