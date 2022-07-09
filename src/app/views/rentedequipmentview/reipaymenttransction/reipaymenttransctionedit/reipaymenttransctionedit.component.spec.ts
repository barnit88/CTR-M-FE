import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReipaymenttransctioneditComponent } from './reipaymenttransctionedit.component';

describe('ReipaymenttransctioneditComponent', () => {
  let component: ReipaymenttransctioneditComponent;
  let fixture: ComponentFixture<ReipaymenttransctioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReipaymenttransctioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReipaymenttransctioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
