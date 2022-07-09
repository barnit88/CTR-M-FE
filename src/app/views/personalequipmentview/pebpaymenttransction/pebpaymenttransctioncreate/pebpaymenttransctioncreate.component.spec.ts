import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PebpaymenttransctioncreateComponent } from './pebpaymenttransctioncreate.component';

describe('PebpaymenttransctioncreateComponent', () => {
  let component: PebpaymenttransctioncreateComponent;
  let fixture: ComponentFixture<PebpaymenttransctioncreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PebpaymenttransctioncreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PebpaymenttransctioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
