import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendtakecontractdetailComponent } from './extendtakecontractdetail.component';

describe('ExtendtakecontractdetailComponent', () => {
  let component: ExtendtakecontractdetailComponent;
  let fixture: ComponentFixture<ExtendtakecontractdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendtakecontractdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendtakecontractdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
