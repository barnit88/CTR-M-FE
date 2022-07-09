import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeincomecreateComponent } from './peincomecreate.component';

describe('PeincomecreateComponent', () => {
  let component: PeincomecreateComponent;
  let fixture: ComponentFixture<PeincomecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeincomecreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeincomecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
