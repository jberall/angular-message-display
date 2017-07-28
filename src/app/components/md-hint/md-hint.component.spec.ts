import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdHintComponent } from './md-hint.component';

describe('MdHintComponent', () => {
  let component: MdHintComponent;
  let fixture: ComponentFixture<MdHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdHintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
