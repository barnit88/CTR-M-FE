import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvipaymenttransctioneditComponent } from './pvipaymenttransctionedit.component';

describe('PvipaymenttransctioneditComponent', () => {
  let component: PvipaymenttransctioneditComponent;
  let fixture: ComponentFixture<PvipaymenttransctioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvipaymenttransctioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvipaymenttransctioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
