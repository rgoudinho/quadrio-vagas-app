import { Component, Input, SimpleChanges } from '@angular/core';
import { CompanieService } from '../../services/companie.service';
import { NgForm } from '@angular/forms';
import { Companie } from 'src/app/models/companie';

@Component({
  selector: 'app-add-companie',
  templateUrl: './add-companie.component.html',
  styleUrls: ['./add-companie.component.css'],
})
export class AddCompanieComponent {
  @Input() companie = new Companie;
  @Input() isEdit = false;
  companies!: Companie[];

  constructor(private companieService: CompanieService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['companie'].currentValue[0] && this.companie !== undefined) {
      this.companie = new Companie();
    } else {
      this.companie = changes['companie'].currentValue[0];
    }
  }

  saveCompanie(form: NgForm) {
    if (this.isEdit) {
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
      this.companies = companies;
    });
  }

  cleanForm(form: NgForm) {
    this.getCompanie();
    form.resetForm();
    this.companie = {} as Companie;
  }
}
