import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvboughtdetailComponent } from './pvboughtdetail.component';

describe('PvboughtdetailComponent', () => {
  let component: PvboughtdetailComponent;
  let fixture: ComponentFixture<PvboughtdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvboughtdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvboughtdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
