import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialstockdetailComponent } from './materialstockdetail.component';

describe('MaterialstockdetailComponent', () => {
  let component: MaterialstockdetailComponent;
  let fixture: ComponentFixture<MaterialstockdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialstockdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialstockdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
