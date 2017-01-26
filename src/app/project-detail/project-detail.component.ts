import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private location: Location, private router: Router, private projectService: ProjectService) { }

  projectToDisplay: FirebaseObjectObservable<any>;
  projectKey: string;
  percentFunded: number;

  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.projectKey = urlParameters['key']
      this.projectToDisplay = this.projectService.getProjectByKey(this.projectKey);
    });
  }
}
