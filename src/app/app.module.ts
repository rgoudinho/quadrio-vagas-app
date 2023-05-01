import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { JobsComponent } from './views/jobs/jobs.component';
import { CompaniesComponent } from './views/companies/companies.component';
import { CompanieComponent } from './components/companie/companie.component';
import { JobComponent } from './components/job/job.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ListCompaniesComponent } from './components/list-companies/list-companies.component';
import { AddCompanieComponent } from './components/add-companie/add-companie.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    JobsComponent,
    CompaniesComponent,
    CompanieComponent,
    JobComponent,
    HeaderComponent,
    ListCompaniesComponent,
    AddCompanieComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
