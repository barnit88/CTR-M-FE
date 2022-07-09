import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReexpensescreateComponent } from './reexpensescreate.component';

describe('ReexpensescreateComponent', () => {
  let component: ReexpensescreateComponent;
  let fixture: ComponentFixture<ReexpensescreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReexpensescreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReexpensescreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
