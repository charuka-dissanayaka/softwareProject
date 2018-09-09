import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditTutorComponent } from './profile-edit-tutor.component';

describe('ProfileEditTutorComponent', () => {
  let component: ProfileEditTutorComponent;
  let fixture: ComponentFixture<ProfileEditTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
