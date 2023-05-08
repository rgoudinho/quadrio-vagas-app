import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { JobsComponent } from './views/jobs/jobs.component';
import { CompaniesComponent } from './views/companies/companies.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ListCompaniesComponent } from './components/list-companies/list-companies.component';
import { FormsModule } from '@angular/forms';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { ListJobComponent } from './components/list-job/list-job.component';
import { FormJobComponent } from './components/form-job/form-job.component';
import { SaveJobComponent } from './views/save-job/save-job.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    JobsComponent,
    CompaniesComponent,
    HeaderComponent,
    ListCompaniesComponent,
    AddCompanyComponent,
    ListJobComponent,
    FormJobComponent,
    SaveJobComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
