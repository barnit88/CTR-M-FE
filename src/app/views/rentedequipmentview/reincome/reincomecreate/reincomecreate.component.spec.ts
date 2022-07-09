import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReincomecreateComponent } from './reincomecreate.component';

describe('ReincomecreateComponent', () => {
  let component: ReincomecreateComponent;
  let fixture: ComponentFixture<ReincomecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReincomecreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReincomecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
