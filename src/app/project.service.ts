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
  }
  deleteProject(projectToDelete){
    var projectEntryInFirebase = this.getProjectByKey(projectToDelete.$key);
    projectEntryInFirebase.remove();
  }
  calcPercent(total:any, funded:any){
    return funded/total*100;
  }
  updateProject(localProject){
    var projectEntryInFirebase = this.getProjectByKey(localProject.$key);
    projectEntryInFirebase.update(
      {title: localProject.title,
        description: localProject.description,
        borrower: localProject.borrower,
        totalLoanAmount: localProject.totalLoanAmount,
        region: localProject.region,
        category: localProject.category});
  }
}
