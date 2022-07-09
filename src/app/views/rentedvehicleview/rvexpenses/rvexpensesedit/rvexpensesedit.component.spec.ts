import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvexpenseseditComponent } from './rvexpensesedit.component';

describe('RvexpenseseditComponent', () => {
  let component: RvexpenseseditComponent;
  let fixture: ComponentFixture<RvexpenseseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvexpenseseditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvexpenseseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
