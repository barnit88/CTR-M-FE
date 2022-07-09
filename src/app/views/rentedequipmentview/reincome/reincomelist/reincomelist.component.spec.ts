import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReincomelistComponent } from './reincomelist.component';

describe('ReincomelistComponent', () => {
  let component: ReincomelistComponent;
  let fixture: ComponentFixture<ReincomelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReincomelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReincomelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
