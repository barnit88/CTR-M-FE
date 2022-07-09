import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvepaymenttransctioncreateComponent } from './rvepaymenttransctioncreate.component';

describe('RvepaymenttransctioncreateComponent', () => {
  let component: RvepaymenttransctioncreateComponent;
  let fixture: ComponentFixture<RvepaymenttransctioncreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvepaymenttransctioncreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvepaymenttransctioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
