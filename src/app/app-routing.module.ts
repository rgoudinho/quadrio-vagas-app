import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './views/jobs/jobs.component';
import { CompaniesComponent } from './views/companies/companies.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: JobsComponent },
  { path: 'vagas', component: JobsComponent },
  { path: 'empresas', component: CompaniesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
