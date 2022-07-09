import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvexpensescreateComponent } from './rvexpensescreate.component';

describe('RvexpensescreateComponent', () => {
  let component: RvexpensescreateComponent;
  let fixture: ComponentFixture<RvexpensescreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvexpensescreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvexpensescreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
