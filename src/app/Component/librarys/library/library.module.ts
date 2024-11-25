import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { RouterModule, Routes } from '@angular/router';
import { EnglishComponent } from '../english/english.component';
import { BridgingCourseComponent } from '../bridging-course/bridging-course.component';
import { AccountingComponent } from '../accounting/accounting.component';
import { EnglishForBusinessComponent } from '../english-for-business/english-for-business.component';
import { LogisticsComponent } from '../logistics/logistics.component';
import { ManagementComponent } from '../management/management.component';
import { ExportImportManagementComponent } from '../export-import-management/export-import-management.component';
import { TeachingEnglishComponent } from '../teaching-english/teaching-english.component';
import { EnglishTranslationComponent } from '../english-translation/english-translation.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryComponent,
    children: [
      { path: 'account', component: AccountingComponent },
      { path: 'englishforbussiness', component: EnglishForBusinessComponent },
      { path: 'englishtranslation', component: EnglishTranslationComponent },
      { path: 'teachingenglish', component: TeachingEnglishComponent },
      { path: 'bridgingcourse', component: BridgingCourseComponent },
      { path: 'english', component: EnglishComponent },
      { path: 'management', component: ManagementComponent },
      { path: 'exportimport', component: ExportImportManagementComponent },
      { path: 'logistics', component: LogisticsComponent },
      { path:'', redirectTo: 'account', pathMatch: 'full' }
    ],
  },
];

@NgModule({
  declarations: [
    LibraryComponent,
    AccountingComponent,
    EnglishForBusinessComponent,
    EnglishTranslationComponent,
    TeachingEnglishComponent,
    BridgingCourseComponent,
    EnglishComponent,
    ManagementComponent,
    ExportImportManagementComponent,
    LogisticsComponent
  ],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class LibraryModule {}
