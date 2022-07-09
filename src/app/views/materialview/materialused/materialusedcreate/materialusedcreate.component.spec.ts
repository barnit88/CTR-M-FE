import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialusedcreateComponent } from './materialusedcreate.component';

describe('MaterialusedcreateComponent', () => {
  let component: MaterialusedcreateComponent;
  let fixture: ComponentFixture<MaterialusedcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialusedcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialusedcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
