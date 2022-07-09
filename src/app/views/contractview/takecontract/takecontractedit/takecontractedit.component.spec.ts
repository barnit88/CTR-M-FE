import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakecontracteditComponent } from './takecontractedit.component';

describe('TakecontracteditComponent', () => {
  let component: TakecontracteditComponent;
  let fixture: ComponentFixture<TakecontracteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakecontracteditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakecontracteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
