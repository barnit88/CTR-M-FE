import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialstocklistComponent } from './materialstocklist.component';

describe('MaterialstocklistComponent', () => {
  let component: MaterialstocklistComponent;
  let fixture: ComponentFixture<MaterialstocklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialstocklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialstocklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
