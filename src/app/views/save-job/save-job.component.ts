import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-save-job',
  templateUrl: './save-job.component.html',
  styleUrls: ['./save-job.component.css']
})
export class SaveJobComponent {
  id = 0;
  route: ActivatedRoute;
  isEdit = false;
  job!: Job;

  constructor(route: ActivatedRoute, private jobService: JobService) {
    this.route = route;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.isEdit = true;
      this.getById();
    }else
    {
      this.job = new Job;
    }
  }

  getById() {
    this.jobService.getJobById(this.id).subscribe((job: Job) => {
      this.job = job;
    });
  }
}
