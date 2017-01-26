import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';


@Component({
  selector: 'edit-amount-funded',
  templateUrl: './edit-amount-funded.component.html',
  styleUrls: ['./edit-amount-funded.component.css'],
  providers: [ ProjectService ]
})
export class EditAmountFundedComponent implements OnInit {
  @Input() projectToDisplay: FirebaseObjectObservable<any>;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }
  lendMoney(currentProject, loanAmount){

    loanAmount = parseInt(loanAmount);
    var projectObject = null;
    this.projectToDisplay.subscribe(result => projectObject = result);
    this.projectService.updateAmountFunded(projectObject, loanAmount);
  }
  
}
