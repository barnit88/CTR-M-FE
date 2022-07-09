import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboursitedetailComponent } from './laboursitedetail.component';

describe('LaboursitedetailComponent', () => {
  let component: LaboursitedetailComponent;
  let fixture: ComponentFixture<LaboursitedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboursitedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboursitedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
