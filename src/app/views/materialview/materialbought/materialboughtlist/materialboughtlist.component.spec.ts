import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialboughtlistComponent } from './materialboughtlist.component';

describe('MaterialboughtlistComponent', () => {
  let component: MaterialboughtlistComponent;
  let fixture: ComponentFixture<MaterialboughtlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialboughtlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialboughtlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
