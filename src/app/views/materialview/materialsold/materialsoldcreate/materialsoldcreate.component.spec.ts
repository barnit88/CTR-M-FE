import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsoldcreateComponent } from './materialsoldcreate.component';

describe('MaterialsoldcreateComponent', () => {
  let component: MaterialsoldcreateComponent;
  let fixture: ComponentFixture<MaterialsoldcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsoldcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialsoldcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
