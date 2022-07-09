import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvrpaymenttransctioncreateComponent } from './rvrpaymenttransctioncreate.component';

describe('RvrpaymenttransctioncreateComponent', () => {
  let component: RvrpaymenttransctioncreateComponent;
  let fixture: ComponentFixture<RvrpaymenttransctioncreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvrpaymenttransctioncreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvrpaymenttransctioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
