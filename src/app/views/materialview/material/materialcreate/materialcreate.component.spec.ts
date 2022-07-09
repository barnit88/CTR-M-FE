import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcreateComponent } from './materialcreate.component';

describe('MaterialcreateComponent', () => {
  let component: MaterialcreateComponent;
  let fixture: ComponentFixture<MaterialcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
