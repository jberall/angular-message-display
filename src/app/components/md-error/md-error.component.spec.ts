import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdErrorComponent } from './md-error.component';

describe('MdErrorComponent', () => {
  let component: MdErrorComponent;
  let fixture: ComponentFixture<MdErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
