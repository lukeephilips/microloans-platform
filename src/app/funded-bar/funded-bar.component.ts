import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { Project } from '../project.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.urlNormalize();
    console.log(this.currentRoute)
  }
  calcPercent(total:any, funded:any){
    console.log(total)
    console.log(funded)

    return funded/total*600;
  }

}
