import { Component, OnInit } from '@angular/core';
import { CardService} from '../../card.service';
@Component({
  selector: 'finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
})
export class FinishComponent implements OnInit {

  constructor(private service: CardService) { }
finscore=this.service.score;;

  ngOnInit() {
  }

  reload(){
    window.location.reload();
  }
}
