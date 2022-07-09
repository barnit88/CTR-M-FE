import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RerentdetailComponent } from './rerentdetail.component';

describe('RerentdetailComponent', () => {
  let component: RerentdetailComponent;
  let fixture: ComponentFixture<RerentdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RerentdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RerentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
