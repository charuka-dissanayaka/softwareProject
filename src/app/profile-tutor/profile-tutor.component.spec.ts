import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTutorComponent } from './profile-tutor.component';

describe('ProfileTutorComponent', () => {
  let component: ProfileTutorComponent;
  let fixture: ComponentFixture<ProfileTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
