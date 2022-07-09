import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvincomelistComponent } from './rvincomelist.component';

describe('RvincomelistComponent', () => {
  let component: RvincomelistComponent;
  let fixture: ComponentFixture<RvincomelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvincomelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvincomelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
