import { Component } from '@angular/core';
import { Companie } from 'src/app/models/companie';
import { CompanieService } from '../../services/companie.service';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent {
  companie = new Companie;
  companies!: Companie[];

  constructor(private companieService: CompanieService) {}

  ngOnInit() {
    this.getCompanie();
  }

  getCompanie() {
    this.companieService.getCompanie().subscribe((companies: Companie[]) => {
      this.companies = companies;
    });
  }

  deleteCompanie(companie: Companie) {
    this.companieService.deleteCompanie(companie).subscribe(() => {
      this.getCompanie();
    });
  }

  editCompanie(companie: Companie) {
    this.companie = { ...companie };
  }
}
