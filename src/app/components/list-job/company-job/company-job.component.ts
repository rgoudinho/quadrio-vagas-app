import { Component, Input, SimpleChanges, } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-job',
  templateUrl: './company-job.component.html',
  styleUrls: ['./company-job.component.css'],
})
export class CompanyJobComponent {
  @Input() companyId!: number;
  company : Company = new Company;
  companies!: Company[];

  constructor(private companyService : CompanyService){}

  ngOnInit(){
    this.getCompanies();

  }

  getCompanies(){
    this.companyService.getCompany().subscribe((companies : Company[])=>{
      this.companies = companies;
      this.getCompany();
    })
  }
  getCompany(){
    for (var company of this.companies){
      if (company.id === this.companyId){
        this.company = company;
      }
    }
  }
}
