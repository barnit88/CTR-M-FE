import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialstockcreateComponent } from './materialstockcreate.component';

describe('MaterialstockcreateComponent', () => {
  let component: MaterialstockcreateComponent;
  let fixture: ComponentFixture<MaterialstockcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialstockcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialstockcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
