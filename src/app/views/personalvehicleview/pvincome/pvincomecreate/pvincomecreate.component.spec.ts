import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvincomecreateComponent } from './pvincomecreate.component';

describe('PvincomecreateComponent', () => {
  let component: PvincomecreateComponent;
  let fixture: ComponentFixture<PvincomecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvincomecreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvincomecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
