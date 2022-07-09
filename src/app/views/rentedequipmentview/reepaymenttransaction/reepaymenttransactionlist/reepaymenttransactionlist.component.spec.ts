import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReepaymenttransactionlistComponent } from './reepaymenttransactionlist.component';

describe('ReepaymenttransactionlistComponent', () => {
  let component: ReepaymenttransactionlistComponent;
  let fixture: ComponentFixture<ReepaymenttransactionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReepaymenttransactionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReepaymenttransactionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
