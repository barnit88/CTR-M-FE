import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvboughtcreateComponent } from './pvboughtcreate.component';

describe('PvboughtcreateComponent', () => {
  let component: PvboughtcreateComponent;
  let fixture: ComponentFixture<PvboughtcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvboughtcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvboughtcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
