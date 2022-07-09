import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvrentdetailComponent } from './rvrentdetail.component';

describe('RvrentdetailComponent', () => {
  let component: RvrentdetailComponent;
  let fixture: ComponentFixture<RvrentdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvrentdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvrentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
