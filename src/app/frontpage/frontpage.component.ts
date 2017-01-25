import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css'],
  providers: [ProjectService]
})
export class FrontpageComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
  viewProject(project){
    this.router.navigate(['projects', project.$key]);
  }

}
