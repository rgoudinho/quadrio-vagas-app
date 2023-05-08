import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent {
  id = 0;
  route: ActivatedRoute;
  isEdit = false;
  company!: Company;

  constructor(route: ActivatedRoute, private companyService: CompanyService) {
    this.route = route;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.isEdit = true;
      this.getById();
    }else
    {
      this.company = new Company;
    }
  }

  getById() {
    this.companyService.getCompanyById(this.id).subscribe((company: Company) => {
      this.company = company;
    });
  }
}
