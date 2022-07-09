import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvepenseseditComponent } from './pvepensesedit.component';

describe('PvepenseseditComponent', () => {
  let component: PvepenseseditComponent;
  let fixture: ComponentFixture<PvepenseseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvepenseseditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvepenseseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
