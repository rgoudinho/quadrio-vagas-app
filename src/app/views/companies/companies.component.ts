import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Companie } from 'src/app/models/companie';
import { CompanieService } from 'src/app/services/companie.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent {
  id = 0;
  route: ActivatedRoute;
  isEdit = false;
  companie!: Companie;

  constructor(route: ActivatedRoute, private companieService: CompanieService) {
    this.route = route;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.isEdit = true;
      this.getById();
    }else
    {
      this.companie = new Companie;
    }
  }

  getById() {
    this.companieService.getCompanieById(this.id).subscribe((companie: Companie) => {
      this.companie = companie;
    });
  }
}
