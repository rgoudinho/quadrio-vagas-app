import { Component, Input, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Company } from 'src/app/models/company';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-form-job',
  templateUrl: './form-job.component.html',
  styleUrls: ['./form-job.component.css']
})
export class FormJobComponent {
  @Input() job = new Job;
  @Input() isEdit = false;
  jobs!: Job[];
  companies!: Company[];
  updateSucess = false;
  saveSucess = false;

  constructor(private jobService: JobService, private companyService: CompanyService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['job'].currentValue[0] && this.job !== undefined) {
      this.job = new Job();
    } else {
      this.job = changes['job'].currentValue[0];
    }
    this.getCompaies();
  }

  getCompaies() {
    this.companyService.getCompany().subscribe((companies: Company[]) => {
      this.companies = companies;
    });
    console.log(this.companies);
  }

  saveJob(form: NgForm) {
    if (this.isEdit) {
      this.jobService.updateJob(this.job).subscribe(() => {
        this.updateSucess = true;
        this.cleanForm(form);
      });
    } else {
      this.jobService.saveJob(this.job).subscribe(() => {
        this.saveSucess = true;
        this.cleanForm(form);
      });
    }
  }

  getJob() {
    this.jobService.getJob().subscribe((jobs: Job[]) => {
      this.jobs = jobs;
    });
  }

  cleanForm(form: NgForm) {
    this.getJob();
    form.resetForm();
    this.job = {} as Job;
  }
}
