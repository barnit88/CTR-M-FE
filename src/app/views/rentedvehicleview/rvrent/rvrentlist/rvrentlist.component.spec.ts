import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvrentlistComponent } from './rvrentlist.component';

describe('RvrentlistComponent', () => {
  let component: RvrentlistComponent;
  let fixture: ComponentFixture<RvrentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvrentlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvrentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
