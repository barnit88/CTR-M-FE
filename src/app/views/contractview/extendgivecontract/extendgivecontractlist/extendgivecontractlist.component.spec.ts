import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendgivecontractlistComponent } from './extendgivecontractlist.component';

describe('ExtendgivecontractlistComponent', () => {
  let component: ExtendgivecontractlistComponent;
  let fixture: ComponentFixture<ExtendgivecontractlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendgivecontractlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendgivecontractlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
