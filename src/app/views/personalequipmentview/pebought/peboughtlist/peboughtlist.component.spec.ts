import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeboughtlistComponent } from './peboughtlist.component';

describe('PeboughtlistComponent', () => {
  let component: PeboughtlistComponent;
  let fixture: ComponentFixture<PeboughtlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeboughtlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeboughtlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
