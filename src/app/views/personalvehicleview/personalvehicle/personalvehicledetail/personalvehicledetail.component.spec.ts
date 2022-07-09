import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalvehicledetailComponent } from './personalvehicledetail.component';

describe('PersonalvehicledetailComponent', () => {
  let component: PersonalvehicledetailComponent;
  let fixture: ComponentFixture<PersonalvehicledetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalvehicledetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalvehicledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
