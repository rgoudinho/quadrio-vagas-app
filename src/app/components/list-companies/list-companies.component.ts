import { Component } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent {
  company = new Company;
  companies!: Company[];

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.getCompany();
  }

  getCompany() {
    this.companyService.getCompany().subscribe((companies: Company[]) => {
      this.companies = companies;
    });
  }

  deleteCompany(company: Company) {
    this.companyService.deleteCompany(company).subscribe(() => {
      this.getCompany();
    });
  }
}
