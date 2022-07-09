import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvincomeeditComponent } from './pvincomeedit.component';

describe('PvincomeeditComponent', () => {
  let component: PvincomeeditComponent;
  let fixture: ComponentFixture<PvincomeeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvincomeeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvincomeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
