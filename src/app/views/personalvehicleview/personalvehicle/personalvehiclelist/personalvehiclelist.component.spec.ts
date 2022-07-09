import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalvehiclelistComponent } from './personalvehiclelist.component';

describe('PersonalvehiclelistComponent', () => {
  let component: PersonalvehiclelistComponent;
  let fixture: ComponentFixture<PersonalvehiclelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalvehiclelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalvehiclelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
