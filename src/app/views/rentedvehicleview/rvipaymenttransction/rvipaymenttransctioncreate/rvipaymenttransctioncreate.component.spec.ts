import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvipaymenttransctioncreateComponent } from './rvipaymenttransctioncreate.component';

describe('RvipaymenttransctioncreateComponent', () => {
  let component: RvipaymenttransctioncreateComponent;
  let fixture: ComponentFixture<RvipaymenttransctioncreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvipaymenttransctioncreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvipaymenttransctioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
