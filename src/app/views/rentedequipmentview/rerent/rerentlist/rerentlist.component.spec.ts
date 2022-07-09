import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RerentlistComponent } from './rerentlist.component';

describe('RerentlistComponent', () => {
  let component: RerentlistComponent;
  let fixture: ComponentFixture<RerentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RerentlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RerentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
