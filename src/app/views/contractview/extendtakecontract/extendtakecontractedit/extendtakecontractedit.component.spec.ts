import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendtakecontracteditComponent } from './extendtakecontractedit.component';

describe('ExtendtakecontracteditComponent', () => {
  let component: ExtendtakecontracteditComponent;
  let fixture: ComponentFixture<ExtendtakecontracteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendtakecontracteditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendtakecontracteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
