import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReipaymenttransctioncreateComponent } from './reipaymenttransctioncreate.component';

describe('ReipaymenttransctioncreateComponent', () => {
  let component: ReipaymenttransctioncreateComponent;
  let fixture: ComponentFixture<ReipaymenttransctioncreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReipaymenttransctioncreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReipaymenttransctioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
