import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvexpenseslistComponent } from './rvexpenseslist.component';

describe('RvexpenseslistComponent', () => {
  let component: RvexpenseslistComponent;
  let fixture: ComponentFixture<RvexpenseslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvexpenseslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvexpenseslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
