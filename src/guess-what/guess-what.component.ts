import { Component,Input,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GuessWhatService } from './guess-what.service';
@Component({
  selector: 'guess-what',
  templateUrl: './guess-what.component.html',
  styleUrls: ['./guess-what.component.scss']
})
export class GuessWhatComponent implements OnInit {

  @Input() gameData:any;

  data:any;
  constructor(private service:GuessWhatService){
  }

  composh:any
  sub:Subscription;
  ngOnInit() {
  this.sub = this.service.compoShow$.subscribe(compoShow => this.composh = compoShow);
  }
}
