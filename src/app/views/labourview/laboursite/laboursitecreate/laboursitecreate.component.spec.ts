import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboursitecreateComponent } from './laboursitecreate.component';

describe('LaboursitecreateComponent', () => {
  let component: LaboursitecreateComponent;
  let fixture: ComponentFixture<LaboursitecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboursitecreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboursitecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
