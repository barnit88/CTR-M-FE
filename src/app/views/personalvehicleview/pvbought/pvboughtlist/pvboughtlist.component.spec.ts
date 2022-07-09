import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvboughtlistComponent } from './pvboughtlist.component';

describe('PvboughtlistComponent', () => {
  let component: PvboughtlistComponent;
  let fixture: ComponentFixture<PvboughtlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvboughtlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvboughtlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
