import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThorallMdErrorComponent } from './thorall-md-error.component';

describe('ThorallMdErrorComponent', () => {
  let component: ThorallMdErrorComponent;
  let fixture: ComponentFixture<ThorallMdErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThorallMdErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThorallMdErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
