import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvincomedetailComponent } from './pvincomedetail.component';

describe('PvincomedetailComponent', () => {
  let component: PvincomedetailComponent;
  let fixture: ComponentFixture<PvincomedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvincomedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvincomedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
