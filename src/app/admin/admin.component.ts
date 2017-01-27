import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { AngularFire } from 'angularfire2';



@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {
  projectToEdit: Project = null;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }
  editProject(project){
    console.log(project);
    this.projectToEdit = project
  }
  doneEditing(){
    this.projectToEdit = null;
  }
  startUpdating(project){
    console.log(project)
    this.projectService.updateProject(project);
  }

}
