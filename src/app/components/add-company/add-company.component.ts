import { Component, Input, SimpleChanges } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { NgForm } from '@angular/forms';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css'],
})
export class AddCompanyComponent {
  @Input() company = new Company;
  @Input() isEdit = false;
  companies!: Company[];

  constructor(private companieService: CompanyService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['company'].currentValue[0] && this.company !== undefined) {
      this.company = new Company();
    } else {
      this.company = changes['company'].currentValue[0];
    }
  }

  saveCompany(form: NgForm) {
    if (this.isEdit) {
      this.companieService.updateCompany(this.company).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.companieService.saveCompany(this.company).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  getCompany() {
    this.companieService.getCompany().subscribe((companies: Company[]) => {
      this.companies = companies;
    });
  }

  cleanForm(form: NgForm) {
    this.getCompany();
    form.resetForm();
    this.company = {} as Company;
  }
}
