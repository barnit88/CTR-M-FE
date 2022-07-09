import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeboughtcreateComponent } from './peboughtcreate.component';

describe('PeboughtcreateComponent', () => {
  let component: PeboughtcreateComponent;
  let fixture: ComponentFixture<PeboughtcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeboughtcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeboughtcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
