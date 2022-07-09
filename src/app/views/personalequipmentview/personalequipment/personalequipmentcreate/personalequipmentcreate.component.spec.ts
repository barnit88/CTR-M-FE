import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalequipmentcreateComponent } from './personalequipmentcreate.component';

describe('PersonalequipmentcreateComponent', () => {
  let component: PersonalequipmentcreateComponent;
  let fixture: ComponentFixture<PersonalequipmentcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalequipmentcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalequipmentcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
