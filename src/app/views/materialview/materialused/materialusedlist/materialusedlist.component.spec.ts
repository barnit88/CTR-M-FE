import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialusedlistComponent } from './materialusedlist.component';

describe('MaterialusedlistComponent', () => {
  let component: MaterialusedlistComponent;
  let fixture: ComponentFixture<MaterialusedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialusedlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialusedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
