import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RerentcreateComponent } from './rerentcreate.component';

describe('RerentcreateComponent', () => {
  let component: RerentcreateComponent;
  let fixture: ComponentFixture<RerentcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RerentcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RerentcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
