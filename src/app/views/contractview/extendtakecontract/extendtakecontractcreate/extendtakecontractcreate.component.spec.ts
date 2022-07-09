import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendtakecontractcreateComponent } from './extendtakecontractcreate.component';

describe('ExtendtakecontractcreateComponent', () => {
  let component: ExtendtakecontractcreateComponent;
  let fixture: ComponentFixture<ExtendtakecontractcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendtakecontractcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendtakecontractcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
