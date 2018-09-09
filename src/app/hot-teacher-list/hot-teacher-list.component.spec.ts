import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotTeacherListComponent } from './hot-teacher-list.component';

describe('HotTeacherListComponent', () => {
  let component: HotTeacherListComponent;
  let fixture: ComponentFixture<HotTeacherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotTeacherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotTeacherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
