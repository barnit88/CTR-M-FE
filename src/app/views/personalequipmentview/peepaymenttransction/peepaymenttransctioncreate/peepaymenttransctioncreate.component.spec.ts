import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeepaymenttransctioncreateComponent } from './peepaymenttransctioncreate.component';

describe('PeepaymenttransctioncreateComponent', () => {
  let component: PeepaymenttransctioncreateComponent;
  let fixture: ComponentFixture<PeepaymenttransctioncreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeepaymenttransctioncreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeepaymenttransctioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
