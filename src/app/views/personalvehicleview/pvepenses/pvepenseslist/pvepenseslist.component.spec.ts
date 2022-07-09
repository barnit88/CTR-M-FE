import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvepenseslistComponent } from './pvepenseslist.component';

describe('PvepenseslistComponent', () => {
  let component: PvepenseslistComponent;
  let fixture: ComponentFixture<PvepenseslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvepenseslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvepenseslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
