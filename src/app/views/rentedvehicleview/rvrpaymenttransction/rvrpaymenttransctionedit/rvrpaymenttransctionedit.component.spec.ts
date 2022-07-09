import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvrpaymenttransctioneditComponent } from './rvrpaymenttransctionedit.component';

describe('RvrpaymenttransctioneditComponent', () => {
  let component: RvrpaymenttransctioneditComponent;
  let fixture: ComponentFixture<RvrpaymenttransctioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvrpaymenttransctioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvrpaymenttransctioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
