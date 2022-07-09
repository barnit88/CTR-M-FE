import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeincomelistComponent } from './peincomelist.component';

describe('PeincomelistComponent', () => {
  let component: PeincomelistComponent;
  let fixture: ComponentFixture<PeincomelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeincomelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeincomelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
