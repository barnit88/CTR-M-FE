import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendgivecontractcreateComponent } from './extendgivecontractcreate.component';

describe('ExtendgivecontractcreateComponent', () => {
  let component: ExtendgivecontractcreateComponent;
  let fixture: ComponentFixture<ExtendgivecontractcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendgivecontractcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendgivecontractcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
