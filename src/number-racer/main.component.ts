import { Component,Input,OnInit } from '@angular/core';
import { MainService} from './main.service'

import { Subscription } from 'rxjs';

@Component({
  selector: 'number-racer-game',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.scss' ],
})
export class MainComponent implements OnInit {

  @Input() gameData:any;

  constructor( private service: MainService){
  }
  composh:any
  sub:Subscription;
 ngOnInit() {
  this.sub = this.service.compoShow$.subscribe(compoShow => this.composh = compoShow);

  }

}
