import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvrpaymenttransctionlistComponent } from './rvrpaymenttransctionlist.component';

describe('RvrpaymenttransctionlistComponent', () => {
  let component: RvrpaymenttransctionlistComponent;
  let fixture: ComponentFixture<RvrpaymenttransctionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvrpaymenttransctionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvrpaymenttransctionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
