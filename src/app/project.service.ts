import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }
  getProjects(){
    return this.projects;
  }
  addProject(newProject: Project){
    this.projects.push(newProject);
  }
  getProjectByKey(key:string){
    return this.angularFire.database.object('projects/' + key);
  }
  updateAmountFunded(currentProject, loanAmount: number) {
    var newAmountFunded =  currentProject.amountFunded + loanAmount;
    var projectEntryInFirebase = this.getProjectByKey(currentProject.$key);
    projectEntryInFirebase.update({amountFunded: newAmountFunded});
    console.log(currentProject);

  }


}
