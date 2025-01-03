import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitecreateComponent } from './sitecreate.component';

describe('SitecreateComponent', () => {
  let component: SitecreateComponent;
  let fixture: ComponentFixture<SitecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitecreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
