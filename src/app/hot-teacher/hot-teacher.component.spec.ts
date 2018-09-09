import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotTeacherComponent } from './hot-teacher.component';

describe('HotTeacherComponent', () => {
  let component: HotTeacherComponent;
  let fixture: ComponentFixture<HotTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
