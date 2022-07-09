import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvincomedetailComponent } from './rvincomedetail.component';

describe('RvincomedetailComponent', () => {
  let component: RvincomedetailComponent;
  let fixture: ComponentFixture<RvincomedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvincomedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvincomedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
