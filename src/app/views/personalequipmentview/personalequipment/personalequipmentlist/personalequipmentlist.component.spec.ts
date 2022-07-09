import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalequipmentlistComponent } from './personalequipmentlist.component';

describe('PersonalequipmentlistComponent', () => {
  let component: PersonalequipmentlistComponent;
  let fixture: ComponentFixture<PersonalequipmentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalequipmentlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalequipmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
