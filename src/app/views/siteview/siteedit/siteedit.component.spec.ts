import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteeditComponent } from './siteedit.component';

describe('SiteeditComponent', () => {
  let component: SiteeditComponent;
  let fixture: ComponentFixture<SiteeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
