import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent}from './app.component';
import { UserModule } from './user/user.module';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { UtilityModule } from './utility/utility.module';
import { AssignmentModule } from './assignment/assignment.module';
import { AdminPortalModule } from './admin-portal/admin-portal.module';
import { NoteModule } from './note/note.module';
import { TimeoutModule } from './timeout/timeout.module';
import { GradesModule } from './grades/grades.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { appRoutes } from './app.route';
import { OverlayContainer, ToastrModule } from 'ngx-toastr';
import { ExamModule } from './exam/exam.module';
// import { GradesComponent } from './grades/grades.component';
import { CoursesModule } from './courses/courses.module';
import { CalendarComponentModule } from './calendar/calendar.module';
import { PlagiarismRemoverModule } from './plagiarism-remover/plagiarism-remover.module';
import { HelpdeskModule } from './helpdesk/helpdesk.module';
// import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbButtonModule, NbChatModule, NbLayoutModule, NbOverlayContainer, NbOverlayContainerAdapter, NbSpinnerModule, NbThemeModule
} from '@nebular/theme';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NoteModule,
    GradesModule,
    UserModule,
    AdminPortalModule,
    LayoutModule,
    HomeModule,
    CoursesModule,
    UtilityModule,
    TimeoutModule,
    AssignmentModule,
    CalendarComponentModule,
    ExamModule,
    HelpdeskModule,
    PlagiarismRemoverModule,
    RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true, relativeLinkResolution: 'legacy' } 
		),
    ToastrModule.forRoot(),
    NbThemeModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbChatModule,
    NbSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // for firestore
    NgxDocViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
