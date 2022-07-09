import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendgivecontractdetailComponent } from './extendgivecontractdetail.component';

describe('ExtendgivecontractdetailComponent', () => {
  let component: ExtendgivecontractdetailComponent;
  let fixture: ComponentFixture<ExtendgivecontractdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendgivecontractdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendgivecontractdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
