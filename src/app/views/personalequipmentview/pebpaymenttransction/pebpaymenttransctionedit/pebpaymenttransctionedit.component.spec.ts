import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PebpaymenttransctioneditComponent } from './pebpaymenttransctionedit.component';

describe('PebpaymenttransctioneditComponent', () => {
  let component: PebpaymenttransctioneditComponent;
  let fixture: ComponentFixture<PebpaymenttransctioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PebpaymenttransctioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PebpaymenttransctioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
