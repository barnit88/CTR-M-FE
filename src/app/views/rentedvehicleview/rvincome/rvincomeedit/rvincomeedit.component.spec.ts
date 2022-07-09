import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvincomeeditComponent } from './rvincomeedit.component';

describe('RvincomeeditComponent', () => {
  let component: RvincomeeditComponent;
  let fixture: ComponentFixture<RvincomeeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvincomeeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvincomeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
