import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { Project } from '../project.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'funded-bar',
  templateUrl: './funded-bar.component.html',
  styleUrls: ['./funded-bar.component.css']
})
export class FundedBarComponent implements OnInit {
  @Input() projectToDisplay: any;
  currentRoute = this.router.url;

  constructor(private route:ActivatedRoute, private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
  }
  calcPercent(total:any, funded:any){
    if(total !== null && funded !== null) {
      var percent = this.projectService.calcPercent(total, funded);
      return percent;
    }
  }

}
