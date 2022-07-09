import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvipaymenttransctioncreateComponent } from './pvipaymenttransctioncreate.component';

describe('PvipaymenttransctioncreateComponent', () => {
  let component: PvipaymenttransctioncreateComponent;
  let fixture: ComponentFixture<PvipaymenttransctioncreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvipaymenttransctioncreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvipaymenttransctioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
