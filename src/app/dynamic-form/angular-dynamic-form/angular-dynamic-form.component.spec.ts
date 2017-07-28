import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDynamicFormComponent } from './angular-dynamic-form.component';

describe('AngularDynamicFormComponent', () => {
  let component: AngularDynamicFormComponent;
  let fixture: ComponentFixture<AngularDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
