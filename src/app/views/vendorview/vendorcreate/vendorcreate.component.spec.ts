import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorcreateComponent } from './vendorcreate.component';

describe('VendorcreateComponent', () => {
  let component: VendorcreateComponent;
  let fixture: ComponentFixture<VendorcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
