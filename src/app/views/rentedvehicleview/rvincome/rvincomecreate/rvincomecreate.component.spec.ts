import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvincomecreateComponent } from './rvincomecreate.component';

describe('RvincomecreateComponent', () => {
  let component: RvincomecreateComponent;
  let fixture: ComponentFixture<RvincomecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvincomecreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvincomecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
