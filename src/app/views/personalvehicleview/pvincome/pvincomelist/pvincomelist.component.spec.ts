import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvincomelistComponent } from './pvincomelist.component';

describe('PvincomelistComponent', () => {
  let component: PvincomelistComponent;
  let fixture: ComponentFixture<PvincomelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvincomelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvincomelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
