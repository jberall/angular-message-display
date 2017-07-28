import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThorallMdHintComponent } from './thorall-md-hint.component';

describe('ThorallMdHintComponent', () => {
  let component: ThorallMdHintComponent;
  let fixture: ComponentFixture<ThorallMdHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThorallMdHintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThorallMdHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
