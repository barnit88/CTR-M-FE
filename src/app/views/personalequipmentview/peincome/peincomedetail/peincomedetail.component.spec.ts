import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeincomedetailComponent } from './peincomedetail.component';

describe('PeincomedetailComponent', () => {
  let component: PeincomedetailComponent;
  let fixture: ComponentFixture<PeincomedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeincomedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeincomedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
