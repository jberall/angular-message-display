import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCounterInputComponent } from './form-counter-input.component';

describe('FormCounterInputComponent', () => {
  let component: FormCounterInputComponent;
  let fixture: ComponentFixture<FormCounterInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCounterInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCounterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
