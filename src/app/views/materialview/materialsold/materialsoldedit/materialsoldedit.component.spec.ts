import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsoldeditComponent } from './materialsoldedit.component';

describe('MaterialsoldeditComponent', () => {
  let component: MaterialsoldeditComponent;
  let fixture: ComponentFixture<MaterialsoldeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsoldeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialsoldeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
