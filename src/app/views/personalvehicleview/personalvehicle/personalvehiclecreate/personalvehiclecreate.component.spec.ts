import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalvehiclecreateComponent } from './personalvehiclecreate.component';

describe('PersonalvehiclecreateComponent', () => {
  let component: PersonalvehiclecreateComponent;
  let fixture: ComponentFixture<PersonalvehiclecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalvehiclecreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalvehiclecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
