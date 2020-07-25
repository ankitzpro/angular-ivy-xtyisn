import { Component,Input,OnInit } from '@angular/core';
import { AccuracyService} from './accuracy.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'accuracy-game',
  templateUrl: './accuracy.component.html',
  styleUrls: [ './accuracy.component.scss' ],
})
export class AccuracyComponent  {

@Input() gameData:any;

  constructor(private service:AccuracyService ){
  }
  composh:any
  sub:Subscription;
 ngOnInit() {
  this.sub = this.service.compoShow$.subscribe(compoShow => this.composh = compoShow);

  }

}
