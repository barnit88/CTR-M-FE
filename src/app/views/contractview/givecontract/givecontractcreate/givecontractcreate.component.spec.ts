import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivecontractcreateComponent } from './givecontractcreate.component';

describe('GivecontractcreateComponent', () => {
  let component: GivecontractcreateComponent;
  let fixture: ComponentFixture<GivecontractcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GivecontractcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GivecontractcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
