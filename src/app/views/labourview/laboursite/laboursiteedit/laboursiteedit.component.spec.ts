import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboursiteeditComponent } from './laboursiteedit.component';

describe('LaboursiteeditComponent', () => {
  let component: LaboursiteeditComponent;
  let fixture: ComponentFixture<LaboursiteeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboursiteeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboursiteeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
