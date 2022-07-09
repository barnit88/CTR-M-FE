import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeepaymenttransctioneditComponent } from './peepaymenttransctionedit.component';

describe('PeepaymenttransctioneditComponent', () => {
  let component: PeepaymenttransctioneditComponent;
  let fixture: ComponentFixture<PeepaymenttransctioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeepaymenttransctioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeepaymenttransctioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
