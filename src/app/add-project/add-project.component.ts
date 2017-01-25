import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [ProjectService]
})
export class AddProjectComponent implements OnInit {
  constructor(private projectService: ProjectService){}

  ngOnInit() {
  }
  submitForm(title:string, borrower: string, totalAmount: string, category: any, region: any, img: string, description: string){
    var newProject: Project = new Project(title, borrower, parseInt(totalAmount), category, region, img, description);
    console.log(newProject);
    this.projectService.addProject(newProject);
  }

}
