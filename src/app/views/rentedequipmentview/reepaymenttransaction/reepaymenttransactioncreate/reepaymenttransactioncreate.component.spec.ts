import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReepaymenttransactioncreateComponent } from './reepaymenttransactioncreate.component';

describe('ReepaymenttransactioncreateComponent', () => {
  let component: ReepaymenttransactioncreateComponent;
  let fixture: ComponentFixture<ReepaymenttransactioncreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReepaymenttransactioncreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReepaymenttransactioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
