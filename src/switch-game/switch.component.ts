import { Component,Input,OnInit } from '@angular/core';
import { SwitchService} from './switch.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'switch-game',
  templateUrl: './switch.component.html',
  styleUrls: [ './switch.component.scss' ],
})
export class SwitchComponent  {

@Input() gameData:any;

  constructor(private service:SwitchService ){
  }
  composh:any
  sub:Subscription;
 ngOnInit() {
  this.sub = this.service.compoShow$.subscribe(compoShow => this.composh = compoShow);

  }

}
