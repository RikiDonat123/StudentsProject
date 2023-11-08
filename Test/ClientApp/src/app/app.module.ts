import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MeetingListComponent } from './components/meeting-list/meeting-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MeetingFormComponent } from './components/meeting-form/meeting-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SearchStudentComponent } from './components/search-student/search-student.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    StudentsListComponent,
    MeetingListComponent,
    MeetingFormComponent,
    SearchStudentComponent,
    StudentsTableComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/students', pathMatch: 'full' },
      { path: 'students', component: StudentsListComponent, pathMatch: 'full'/*,canActivate: [AuthorizeGuard]*/ },
      { path: 'students/search', component: SearchStudentComponent/*,canActivate: [AuthorizeGuard]*/ },
      { path: 'students/:id', component: MeetingListComponent, pathMatch: 'full'/*,canActivate: [AuthorizeGuard]*/ },
    ]),
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
