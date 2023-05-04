import { Component } from '@angular/core';
import { CompanieService } from '../../services/companie.service';
import { NgForm } from '@angular/forms';
import { Companie } from 'src/app/models/companie';

@Component({
  selector: 'app-add-companie',
  templateUrl: './add-companie.component.html',
  styleUrls: ['./add-companie.component.css']
})
export class AddCompanieComponent {

  companie = {} as Companie;
  companies!: Companie[];

  constructor(private companieService: CompanieService) {}

  saveCompanie(form: NgForm) {
    if (this.companie.id !== undefined) {
      this.companieService.updateCompanie(this.companie).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.companieService.saveCompanie(this.companie).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  getCompanie() {
    this.companieService.getCompanie().subscribe((companies: Companie[]) => {
      console.log(this.companieService.getCompanie());
      this.companies = companies;
    });
  }

  cleanForm(form: NgForm) {
    this.getCompanie();
    form.resetForm();
    this.companie = {} as Companie;
  }
}
