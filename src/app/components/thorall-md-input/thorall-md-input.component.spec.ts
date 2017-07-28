import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThorallMdInputComponent } from './thorall-md-input.component';

describe('ThorallMdInputComponent', () => {
  let component: ThorallMdInputComponent;
  let fixture: ComponentFixture<ThorallMdInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThorallMdInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThorallMdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
