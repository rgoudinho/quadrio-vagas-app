import { Component, SimpleChanges } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Job } from 'src/app/models/job';
import { CompanyService } from 'src/app/services/company.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent {
  job = new Job;
  jobs!: Job[];
  company : Company = new Company;

  constructor(private jobService: JobService, private companyService: CompanyService) {}

  ngOnInit() {
    this.getJob();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['job'].currentValue[0] && this.job !== undefined) {
      this.job = new Job();
    } else {
      this.job = changes['job'].currentValue[0];
    }
  }

  getJob() {
    this.jobService.getJob().subscribe((jobs: Job[]) => {
      this.jobs = jobs;
    });
  }

  name = (job: Job) =>{
    this.companyService.getCompanyById(job.company_id).subscribe((company: Company) => {
      console.log(company.name);
      return company;
    })
    return new Company;
  }

  deleteJob(job: Job) {
    this.jobService.deleteJob(job).subscribe(() => {
      this.getJob();
    });
  }
}
