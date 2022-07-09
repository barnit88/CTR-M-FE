import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendtakecontractlistComponent } from './extendtakecontractlist.component';

describe('ExtendtakecontractlistComponent', () => {
  let component: ExtendtakecontractlistComponent;
  let fixture: ComponentFixture<ExtendtakecontractlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendtakecontractlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendtakecontractlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
