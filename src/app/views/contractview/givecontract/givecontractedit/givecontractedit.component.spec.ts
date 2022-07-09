import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivecontracteditComponent } from './givecontractedit.component';

describe('GivecontracteditComponent', () => {
  let component: GivecontracteditComponent;
  let fixture: ComponentFixture<GivecontracteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GivecontracteditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GivecontracteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
