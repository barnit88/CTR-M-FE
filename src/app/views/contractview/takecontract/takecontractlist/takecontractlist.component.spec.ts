import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakecontractlistComponent } from './takecontractlist.component';

describe('TakecontractlistComponent', () => {
  let component: TakecontractlistComponent;
  let fixture: ComponentFixture<TakecontractlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakecontractlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakecontractlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
