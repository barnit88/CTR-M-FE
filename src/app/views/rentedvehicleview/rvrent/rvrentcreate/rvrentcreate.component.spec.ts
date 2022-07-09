import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvrentcreateComponent } from './rvrentcreate.component';

describe('RvrentcreateComponent', () => {
  let component: RvrentcreateComponent;
  let fixture: ComponentFixture<RvrentcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvrentcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvrentcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
