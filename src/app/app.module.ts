import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HotTeacherComponent } from './hot-teacher/hot-teacher.component';
import { HotTeacherListComponent } from './hot-teacher-list/hot-teacher-list.component';
import { FeatureItemComponent } from './feature-item/feature-item.component';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from '../app/routers';
import { SlideshowComponent } from './slideshow/slideshow.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './services/register.service';
import { AuthService } from './services/auth.service';
import { FooterComponent } from './footer/footer.component';
import { ProfileTutorComponent } from './profile-tutor/profile-tutor.component';
import { ProfileEditTutorComponent } from './profile-edit-tutor/profile-edit-tutor.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { TutorCardComponent } from './tutor-card/tutor-card.component';
import { TutorCardListService } from './services/tutor-card-list.service';
import { TutorAuthGuard } from './services/tutor-auth-guard.service';
import { AuthGaurd } from './services/auth-gaurd.service';
import { StudentAuthGuard } from './services/student-auth-gaurd.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoAccessComponent } from './no-access/no-access.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HotTeacherComponent,
    HotTeacherListComponent,
    FeatureItemComponent,
    SlideshowComponent,
    FooterComponent,
    ProfileTutorComponent,
    ProfileEditTutorComponent,
    StudentHomeComponent,
    TutorCardComponent,
    AdminLoginComponent,
    DashboardComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RegisterService,
    AuthService,
    TutorCardListService,
    TutorAuthGuard,
    AuthGaurd,
    StudentAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
