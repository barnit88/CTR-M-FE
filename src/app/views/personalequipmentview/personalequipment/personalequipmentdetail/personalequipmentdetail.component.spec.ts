import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalequipmentdetailComponent } from './personalequipmentdetail.component';

describe('PersonalequipmentdetailComponent', () => {
  let component: PersonalequipmentdetailComponent;
  let fixture: ComponentFixture<PersonalequipmentdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalequipmentdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalequipmentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
