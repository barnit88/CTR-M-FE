import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvboughteditComponent } from './pvboughtedit.component';

describe('PvboughteditComponent', () => {
  let component: PvboughteditComponent;
  let fixture: ComponentFixture<PvboughteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvboughteditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvboughteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
