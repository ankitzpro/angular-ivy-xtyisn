import { Component,Input,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RupeePaiseService } from './rupee-paise.service';
@Component({
  selector: 'app-rupee-paise',
  templateUrl: './rupee-paise.component.html',
  styleUrls: ['./rupee-paise.component.scss']
})
export class RupeePaiseComponent implements OnInit {
  title = 'RupeePaise';
  @Input() gameData:any;
  
  constructor(private service:RupeePaiseService ){
  }

  composh:any
  sub:Subscription;
 ngOnInit() {
  this.sub = this.service.compoShow$.subscribe(compoShow => this.composh = compoShow);

  }


}
