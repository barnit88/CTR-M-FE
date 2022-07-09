import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourcreateComponent } from './labourcreate.component';

describe('LabourcreateComponent', () => {
  let component: LabourcreateComponent;
  let fixture: ComponentFixture<LabourcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabourcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabourcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
