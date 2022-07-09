import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialdetailComponent } from './materialdetail.component';

describe('MaterialdetailComponent', () => {
  let component: MaterialdetailComponent;
  let fixture: ComponentFixture<MaterialdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
