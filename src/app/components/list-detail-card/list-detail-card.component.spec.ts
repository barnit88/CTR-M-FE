import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetailCardComponent } from './list-detail-card.component';

describe('ListDetailCardComponent', () => {
  let component: ListDetailCardComponent;
  let fixture: ComponentFixture<ListDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDetailCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
