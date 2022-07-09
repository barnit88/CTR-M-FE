import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendgivecontracteditComponent } from './extendgivecontractedit.component';

describe('ExtendgivecontracteditComponent', () => {
  let component: ExtendgivecontracteditComponent;
  let fixture: ComponentFixture<ExtendgivecontracteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendgivecontracteditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendgivecontracteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
