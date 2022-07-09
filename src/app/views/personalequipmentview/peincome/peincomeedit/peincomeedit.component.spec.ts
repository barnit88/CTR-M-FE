import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeincomeeditComponent } from './peincomeedit.component';

describe('PeincomeeditComponent', () => {
  let component: PeincomeeditComponent;
  let fixture: ComponentFixture<PeincomeeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeincomeeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeincomeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
