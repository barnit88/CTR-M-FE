import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakecontractdetailComponent } from './takecontractdetail.component';

describe('TakecontractdetailComponent', () => {
  let component: TakecontractdetailComponent;
  let fixture: ComponentFixture<TakecontractdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakecontractdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakecontractdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
