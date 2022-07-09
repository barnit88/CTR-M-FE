import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeexpenseslistComponent } from './peexpenseslist.component';

describe('PeexpenseslistComponent', () => {
  let component: PeexpenseslistComponent;
  let fixture: ComponentFixture<PeexpenseslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeexpenseslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeexpenseslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
