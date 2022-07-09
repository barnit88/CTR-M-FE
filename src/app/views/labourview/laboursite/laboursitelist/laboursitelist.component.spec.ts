import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboursitelistComponent } from './laboursitelist.component';

describe('LaboursitelistComponent', () => {
  let component: LaboursitelistComponent;
  let fixture: ComponentFixture<LaboursitelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboursitelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboursitelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
