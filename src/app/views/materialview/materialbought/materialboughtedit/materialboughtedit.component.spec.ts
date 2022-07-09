import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialboughteditComponent } from './materialboughtedit.component';

describe('MaterialboughteditComponent', () => {
  let component: MaterialboughteditComponent;
  let fixture: ComponentFixture<MaterialboughteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialboughteditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialboughteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
