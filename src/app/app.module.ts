import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { SidnavComponent } from './sidnav/sidnav.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { EmptableComponent } from './emptable/emptable.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component'
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
// import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
// import { AuthCallback } from './auth-callback.component/auth-callback.component.component';





@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    SidnavComponent,
    HomeComponent,
    SearchComponent,
    EmptableComponent,
    AddComponent,
    EditComponent,
    // AuthCallbackComponent,
    // AuthCallback.ComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule, 
    Ng2OrderModule,
    HttpClientModule,
    OAuthModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
