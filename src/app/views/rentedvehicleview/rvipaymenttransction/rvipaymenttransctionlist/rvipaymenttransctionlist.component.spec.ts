import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvipaymenttransctionlistComponent } from './rvipaymenttransctionlist.component';

describe('RvipaymenttransctionlistComponent', () => {
  let component: RvipaymenttransctionlistComponent;
  let fixture: ComponentFixture<RvipaymenttransctionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvipaymenttransctionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvipaymenttransctionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
