import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivecontractlistComponent } from './givecontractlist.component';

describe('GivecontractlistComponent', () => {
  let component: GivecontractlistComponent;
  let fixture: ComponentFixture<GivecontractlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GivecontractlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GivecontractlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
