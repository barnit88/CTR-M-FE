import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvepaymenttransctionlistComponent } from './rvepaymenttransctionlist.component';

describe('RvepaymenttransctionlistComponent', () => {
  let component: RvepaymenttransctionlistComponent;
  let fixture: ComponentFixture<RvepaymenttransctionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvepaymenttransctionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvepaymenttransctionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
