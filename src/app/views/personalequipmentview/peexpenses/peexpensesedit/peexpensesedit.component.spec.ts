import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeexpenseseditComponent } from './peexpensesedit.component';

describe('PeexpenseseditComponent', () => {
  let component: PeexpenseseditComponent;
  let fixture: ComponentFixture<PeexpenseseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeexpenseseditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeexpenseseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
