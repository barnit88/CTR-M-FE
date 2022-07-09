import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialusededitComponent } from './materialusededit.component';

describe('MaterialusededitComponent', () => {
  let component: MaterialusededitComponent;
  let fixture: ComponentFixture<MaterialusededitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialusededitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialusededitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
