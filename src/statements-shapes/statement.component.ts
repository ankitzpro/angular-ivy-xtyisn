
import { Component,Input,OnInit } from '@angular/core';
import { StatementService} from './statement.service';
import { Subscription } from 'rxjs';

 
@Component({
  selector: 'statement-shapes',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent  {

  title = 'StatementAndShape';
@Input() gameData:any;

  constructor(private service:StatementService ){
  }
  composh:any
  sub:Subscription;
 ngOnInit() {
  this.sub = this.service.compoShow$.subscribe(compoShow => this.composh = compoShow);

  }

}