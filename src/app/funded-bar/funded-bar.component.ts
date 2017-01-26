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
  @Input() projectToDisplay: FirebaseListObservable<any>;
  currentRoute = this.router.url;

  urlNormalize(){
    if (this.currentRoute === '/'){
      this.currentRoute = 'home';
    }
  }

  constructor(private route:ActivatedRoute, private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.urlNormalize();
  }
  calcPercent(total:any, funded:any){
    return this.projectService.calcPercent(total, funded);
  }

}
