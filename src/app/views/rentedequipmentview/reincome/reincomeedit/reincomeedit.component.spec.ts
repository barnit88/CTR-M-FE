import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReincomeeditComponent } from './reincomeedit.component';

describe('ReincomeeditComponent', () => {
  let component: ReincomeeditComponent;
  let fixture: ComponentFixture<ReincomeeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReincomeeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReincomeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
