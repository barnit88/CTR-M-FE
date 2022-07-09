import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReipaymenttransctionlistComponent } from './reipaymenttransctionlist.component';

describe('ReipaymenttransctionlistComponent', () => {
  let component: ReipaymenttransctionlistComponent;
  let fixture: ComponentFixture<ReipaymenttransctionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReipaymenttransctionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReipaymenttransctionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
