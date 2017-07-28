import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThorallMaterialInputComponent } from './thorall-material-input.component';

describe('ThorallMaterialInputComponent', () => {
  let component: ThorallMaterialInputComponent;
  let fixture: ComponentFixture<ThorallMaterialInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThorallMaterialInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThorallMaterialInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
