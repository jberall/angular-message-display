import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThorallMaterialComponent } from './form-thorall-material.component';

describe('FormThorallMaterialComponent', () => {
  let component: FormThorallMaterialComponent;
  let fixture: ComponentFixture<FormThorallMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormThorallMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormThorallMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
