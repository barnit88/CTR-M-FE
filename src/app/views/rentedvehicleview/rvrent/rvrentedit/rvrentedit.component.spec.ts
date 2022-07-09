import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvrenteditComponent } from './rvrentedit.component';

describe('RvrenteditComponent', () => {
  let component: RvrenteditComponent;
  let fixture: ComponentFixture<RvrenteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvrenteditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvrenteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
