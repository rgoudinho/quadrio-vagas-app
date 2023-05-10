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
  deleteSucess = false;

  constructor(private jobService: JobService, private companyService: CompanyService) {}

  ngOnInit() {
    this.getJob();
  }

  getJob() {
    this.jobService.getJob().subscribe((jobs: Job[]) => {
      this.jobs = jobs;
    });
  }

  deleteJob(job: Job) {
    this.jobService.deleteJob(job).subscribe(() => {
      this.deleteSucess = true;
      this.getJob();
    });
  }
}
