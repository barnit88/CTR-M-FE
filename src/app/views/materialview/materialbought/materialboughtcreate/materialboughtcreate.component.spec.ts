import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialboughtcreateComponent } from './materialboughtcreate.component';

describe('MaterialboughtcreateComponent', () => {
  let component: MaterialboughtcreateComponent;
  let fixture: ComponentFixture<MaterialboughtcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialboughtcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialboughtcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
