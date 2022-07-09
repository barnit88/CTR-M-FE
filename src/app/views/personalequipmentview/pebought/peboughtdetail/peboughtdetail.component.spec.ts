import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeboughtdetailComponent } from './peboughtdetail.component';

describe('PeboughtdetailComponent', () => {
  let component: PeboughtdetailComponent;
  let fixture: ComponentFixture<PeboughtdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeboughtdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeboughtdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
