import { Component,Input,OnInit } from '@angular/core';
import { CardService} from './card.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'memory-cards',
  templateUrl: './memcards.component.html',
  styleUrls: [ './memcards.component.scss' ],
})
export class MemcardsComponent implements OnInit {


@Input() gameData:any;

  data:any;
  constructor(private service:CardService){
  }
  composh:any
  sub:Subscription;
 ngOnInit() {
  this.sub = this.service.compoShow$.subscribe(compoShow => this.composh = compoShow);

  }
}
