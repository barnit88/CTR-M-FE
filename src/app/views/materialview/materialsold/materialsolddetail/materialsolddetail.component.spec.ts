import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsolddetailComponent } from './materialsolddetail.component';

describe('MaterialsolddetailComponent', () => {
  let component: MaterialsolddetailComponent;
  let fixture: ComponentFixture<MaterialsolddetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsolddetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialsolddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
