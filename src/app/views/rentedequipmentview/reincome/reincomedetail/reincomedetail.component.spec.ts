import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReincomedetailComponent } from './reincomedetail.component';

describe('ReincomedetailComponent', () => {
  let component: ReincomedetailComponent;
  let fixture: ComponentFixture<ReincomedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReincomedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReincomedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
