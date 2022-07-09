import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeboughteditComponent } from './peboughtedit.component';

describe('PeboughteditComponent', () => {
  let component: PeboughteditComponent;
  let fixture: ComponentFixture<PeboughteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeboughteditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeboughteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
