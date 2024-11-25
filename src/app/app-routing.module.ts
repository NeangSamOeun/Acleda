import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MajorComponent } from './Component/major/major.component';
import { CoursesComponent } from './Component/mycourses/courses/courses.component';
import { GradesComponent } from './Component/grades/grades.component';
// import { LibraryModule } from './Component/librarys/library/library.module';
import { ExperienceComponent } from './Component/experience/experience.component';
import { RequestsComponent } from './Component/requests/requests.component';
import { AchievementComponent } from './Component/achievement/achievement.component';
import { authGuard } from './Layout/login/guard/auth.guard';
import { LoginFormComponent } from './Layout/login/login-form/login-form.component';
import { LayoutComponent } from './Layout/layout/layout.component';

const routes: Routes = [
  { path: 'layout', component: LayoutComponent, 
    children:[
      { path: 'major', component: MajorComponent, },
      { path: 'courses', component: CoursesComponent, },
      { path: 'grades', component: GradesComponent, },
      { path: 'library', loadChildren: ()=> import('./Component/librarys/library/library.module').then(m => m.LibraryModule) },
      { path: 'experience', component: ExperienceComponent, },
      { path: 'requests', component: RequestsComponent, },
      { path: 'achievement', component: AchievementComponent, },
      { path: 'profile', loadChildren: ()=> import('./Component/profile/profile/profile.module').then(m => m.ProfileModule) }
    ]
   },
  { path: 'login', component: LoginFormComponent  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {};

