import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeepaymenttransctionlistComponent } from './peepaymenttransctionlist.component';

describe('PeepaymenttransctionlistComponent', () => {
  let component: PeepaymenttransctionlistComponent;
  let fixture: ComponentFixture<PeepaymenttransctionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeepaymenttransctionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeepaymenttransctionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
