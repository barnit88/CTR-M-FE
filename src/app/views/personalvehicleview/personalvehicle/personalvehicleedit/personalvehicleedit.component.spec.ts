import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalvehicleeditComponent } from './personalvehicleedit.component';

describe('PersonalvehicleeditComponent', () => {
  let component: PersonalvehicleeditComponent;
  let fixture: ComponentFixture<PersonalvehicleeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalvehicleeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalvehicleeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
