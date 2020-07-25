import { Component,Input,OnInit } from '@angular/core';
import { BalloonService} from './balloon.service'

import { Subscription } from 'rxjs';
 
@Component({
  selector: 'balloon-game',
  templateUrl: './balloon.component.html',
  styleUrls: [ './balloon.component.scss' ],
})
export class BalloonComponent implements OnInit {

  @Input() gameData:any;

  constructor( private service: BalloonService){
  }

timer:string;
  composh:any
  sub:Subscription;
 ngOnInit() {
  this.sub = this.service.compoShow$.subscribe(compoShow => this.composh = compoShow);
  this.sub = this.service.timer$.subscribe(timer => this.timer = timer);

  }

 

}