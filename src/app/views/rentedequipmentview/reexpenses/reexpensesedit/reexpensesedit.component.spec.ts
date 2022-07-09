import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReexpenseseditComponent } from './reexpensesedit.component';

describe('ReexpenseseditComponent', () => {
  let component: ReexpenseseditComponent;
  let fixture: ComponentFixture<ReexpenseseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReexpenseseditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReexpenseseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
