import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvepensescreateComponent } from './pvepensescreate.component';

describe('PvepensescreateComponent', () => {
  let component: PvepensescreateComponent;
  let fixture: ComponentFixture<PvepensescreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvepensescreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvepensescreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
