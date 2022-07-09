import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PebpaymenttransctionlistComponent } from './pebpaymenttransctionlist.component';

describe('PebpaymenttransctionlistComponent', () => {
  let component: PebpaymenttransctionlistComponent;
  let fixture: ComponentFixture<PebpaymenttransctionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PebpaymenttransctionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PebpaymenttransctionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
