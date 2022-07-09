import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalequipmenteditComponent } from './personalequipmentedit.component';

describe('PersonalequipmenteditComponent', () => {
  let component: PersonalequipmenteditComponent;
  let fixture: ComponentFixture<PersonalequipmenteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalequipmenteditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalequipmenteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
