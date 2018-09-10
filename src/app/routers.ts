import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGaurd } from './services/auth-gaurd.service';
import { ProfileTutorComponent } from './profile-tutor/profile-tutor.component';
import { ProfileEditTutorComponent } from './profile-edit-tutor/profile-edit-tutor.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { TutorAuthGuard } from './services/tutor-auth-guard.service';
import { StudentAuthGuard } from './services/student-auth-gaurd.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const appRoutes: Routes = [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: "\login",
        component: LoginComponent
      },
      {
        path: "\signup",
        component: RegisterComponent
      },
      {
        path: "\profile-tutor",
        component: ProfileTutorComponent,
        canActivate: [AuthGaurd, TutorAuthGuard]
      },
      {
        path: "\profile-edit-tutor",
        component: ProfileEditTutorComponent,
        canActivate: [AuthGaurd, TutorAuthGuard]
      },
      {
        path: "\studenthome",
        component: StudentHomeComponent,
        canActivate: [AuthGaurd, StudentAuthGuard]
      },
      {
        path: "\admin-login",
        component: AdminLoginComponent
      },
      {
        path: "\dashboard",
        component: DashboardComponent,
      },
]