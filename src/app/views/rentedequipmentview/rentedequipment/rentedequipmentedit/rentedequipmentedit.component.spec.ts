import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedequipmenteditComponent } from './rentedequipmentedit.component';

describe('RentedequipmenteditComponent', () => {
  let component: RentedequipmenteditComponent;
  let fixture: ComponentFixture<RentedequipmenteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentedequipmenteditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentedequipmenteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
