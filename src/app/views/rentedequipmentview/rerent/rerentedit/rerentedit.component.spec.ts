import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RerenteditComponent } from './rerentedit.component';

describe('RerenteditComponent', () => {
  let component: RerenteditComponent;
  let fixture: ComponentFixture<RerenteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RerenteditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RerenteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
