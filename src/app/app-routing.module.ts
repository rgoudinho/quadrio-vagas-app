import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [
  { path: 'vagas', component: JobsComponent },
  { path: 'empresas', component: CompaniesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
