import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: 'region',
  pure: false
})
export class RegionPipe implements PipeTransform {
  transform(input: Project[], desiredRegion) {
    var output: any[] =[];
    if (input){
      if (desiredRegion === "India"){
        for (let i = 0; i < input.length; i++){
          if (input[i].region === "India") {
            output.push(input[i]);
          }
        }
        return this.sort(output);
      }
      else if (desiredRegion === "Africa"){
        for (let i = 0; i < input.length; i++){
          if (input[i].region === "Africa") {
            output.push(input[i]);
          }
        }
        return this.sort(output);
      }
      else if (desiredRegion === "Latin America"){
        for (let i = 0; i < input.length; i++){
          if (input[i].region === "Latin America") {
            output.push(input[i]);
          }
        }
        return this.sort(output);
      }
      else {
        return this.sort(input);
      }
    }
  }
  sort(output: Project[]){
    Project
    return output.sort(function(a,b){
      return (a.amountFunded/a.totalLoanAmount) - (b.amountFunded/b.totalLoanAmount);
    });
  }
}
