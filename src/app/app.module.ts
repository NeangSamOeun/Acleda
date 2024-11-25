import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Layout/layout/layout.component';
import { TopMenuComponent } from './Layout/top-menu/top-menu.component';
import { LeftMenuComponent } from './Layout/left-menu/left-menu.component';
import { LoginFormComponent } from './Layout/login/login-form/login-form.component';
import { MajorComponent } from './Component/major/major.component';
import { CoursesComponent } from './Component/mycourses/courses/courses.component';
import { GradesComponent } from './Component/grades/grades.component';
// import { LibraryComponent } from './Component/librarys/library/library.component';
import { ExperienceComponent } from './Component/experience/experience.component';
import { RequestsComponent } from './Component/requests/requests.component';
import { AchievementComponent } from './Component/achievement/achievement.component';
import { BodyComponent } from './Layout/body/body.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './Component/mycourses/education/education.component';
import { MathematicsComponent } from './Component/mycourses/mathematics/mathematics.component';
import { BusinessComponent } from './Component/mycourses/business/business.component';
import { HumanitiesComponent } from './Component/mycourses/humanities/humanities.component';
import { SocialSciencesComponent } from './Component/mycourses/social-sciences/social-sciences.component';
import { ComputerScienceComponent } from './Component/mycourses/computer-science/computer-science.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopMenuComponent,
    LeftMenuComponent,
    LoginFormComponent,
    MajorComponent,
    CoursesComponent,
    GradesComponent,
    // LibraryComponent,
    ExperienceComponent,
    RequestsComponent,
    AchievementComponent,
    BodyComponent,
    EducationComponent,
    MathematicsComponent,
    BusinessComponent,
    HumanitiesComponent,
    SocialSciencesComponent,
    ComputerScienceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DropdownModule
    
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
