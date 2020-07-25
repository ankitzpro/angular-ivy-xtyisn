import { Component,Input,OnInit } from '@angular/core';
import { CalcService } from './calc.service'
import { Subscription, from } from 'rxjs';

@Component({
  selector: 'calc-game',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {
  constructor(private service: CalcService) {}
  title = 'numberGame';

  @Input() gameData:any;

  composh:any
  sub:Subscription;
 ngOnInit() {
  this.sub = this.service.compoShow$.subscribe(compoShow => this.composh = compoShow);

  }
}
