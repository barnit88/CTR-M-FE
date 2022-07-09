import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsoldlistComponent } from './materialsoldlist.component';

describe('MaterialsoldlistComponent', () => {
  let component: MaterialsoldlistComponent;
  let fixture: ComponentFixture<MaterialsoldlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsoldlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialsoldlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
