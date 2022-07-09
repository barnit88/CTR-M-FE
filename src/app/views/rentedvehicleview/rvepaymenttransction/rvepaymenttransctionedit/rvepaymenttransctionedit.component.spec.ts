import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvepaymenttransctioneditComponent } from './rvepaymenttransctionedit.component';

describe('RvepaymenttransctioneditComponent', () => {
  let component: RvepaymenttransctioneditComponent;
  let fixture: ComponentFixture<RvepaymenttransctioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvepaymenttransctioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvepaymenttransctioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
