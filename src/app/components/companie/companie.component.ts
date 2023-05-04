import { Component, Input, OnInit } from '@angular/core';
import { CompanieService } from '../../services/companie.service';
import { Companie } from 'src/app/models/companie';


// https://medium.com/@fernandoevangelista_28291/consumindo-api-rest-com-httpclient-no-angular-8-62c5d733ffb6

@Component({
  selector: 'app-companie',
  templateUrl: './companie.component.html',
  styleUrls: ['./companie.component.css'],
})
export class CompanieComponent implements OnInit{
  @Input() companie = new Companie;

  constructor(private companieService: CompanieService) {}
  ngOnInit() {

  }

  deleteCompanie(companie: Companie) {
    this.companieService.deleteCompanie(companie).subscribe(() => { });
  }

  editCompanie(companie: Companie) {

  }
}
