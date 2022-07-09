import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeexpensescreateComponent } from './peexpensescreate.component';

describe('PeexpensescreateComponent', () => {
  let component: PeexpensescreateComponent;
  let fixture: ComponentFixture<PeexpensescreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeexpensescreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeexpensescreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
