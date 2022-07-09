import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialuseddetailComponent } from './materialuseddetail.component';

describe('MaterialuseddetailComponent', () => {
  let component: MaterialuseddetailComponent;
  let fixture: ComponentFixture<MaterialuseddetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialuseddetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialuseddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
