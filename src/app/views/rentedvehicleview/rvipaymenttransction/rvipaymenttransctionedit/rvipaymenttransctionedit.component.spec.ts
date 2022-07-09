import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvipaymenttransctioneditComponent } from './rvipaymenttransctionedit.component';

describe('RvipaymenttransctioneditComponent', () => {
  let component: RvipaymenttransctioneditComponent;
  let fixture: ComponentFixture<RvipaymenttransctioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvipaymenttransctioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvipaymenttransctioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
