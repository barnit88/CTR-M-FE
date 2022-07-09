import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakecontractcreateComponent } from './takecontractcreate.component';

describe('TakecontractcreateComponent', () => {
  let component: TakecontractcreateComponent;
  let fixture: ComponentFixture<TakecontractcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakecontractcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakecontractcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
