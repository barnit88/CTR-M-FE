import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivecontractdetailComponent } from './givecontractdetail.component';

describe('GivecontractdetailComponent', () => {
  let component: GivecontractdetailComponent;
  let fixture: ComponentFixture<GivecontractdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GivecontractdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GivecontractdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
