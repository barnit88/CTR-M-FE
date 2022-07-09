import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReexpenseslistComponent } from './reexpenseslist.component';

describe('ReexpenseslistComponent', () => {
  let component: ReexpenseslistComponent;
  let fixture: ComponentFixture<ReexpenseslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReexpenseslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReexpenseslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
