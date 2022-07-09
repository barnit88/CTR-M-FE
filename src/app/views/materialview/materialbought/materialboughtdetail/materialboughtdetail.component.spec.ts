import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialboughtdetailComponent } from './materialboughtdetail.component';

describe('MaterialboughtdetailComponent', () => {
  let component: MaterialboughtdetailComponent;
  let fixture: ComponentFixture<MaterialboughtdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialboughtdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialboughtdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
