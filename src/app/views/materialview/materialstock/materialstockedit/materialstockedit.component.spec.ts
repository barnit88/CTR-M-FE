import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialstockeditComponent } from './materialstockedit.component';

describe('MaterialstockeditComponent', () => {
  let component: MaterialstockeditComponent;
  let fixture: ComponentFixture<MaterialstockeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialstockeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialstockeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
