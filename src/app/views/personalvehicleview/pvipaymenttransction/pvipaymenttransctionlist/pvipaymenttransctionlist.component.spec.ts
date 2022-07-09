import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvipaymenttransctionlistComponent } from './pvipaymenttransctionlist.component';

describe('PvipaymenttransctionlistComponent', () => {
  let component: PvipaymenttransctionlistComponent;
  let fixture: ComponentFixture<PvipaymenttransctionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvipaymenttransctionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvipaymenttransctionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
