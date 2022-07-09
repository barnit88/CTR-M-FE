import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReepaymenttransactioneditComponent } from './reepaymenttransactionedit.component';

describe('ReepaymenttransactioneditComponent', () => {
  let component: ReepaymenttransactioneditComponent;
  let fixture: ComponentFixture<ReepaymenttransactioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReepaymenttransactioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReepaymenttransactioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
