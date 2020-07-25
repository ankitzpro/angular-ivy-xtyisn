import { Component, OnInit } from '@angular/core';
import { SwitchService} from '../../switch.service';
@Component({
  selector: 'finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
})
export class FinishComponent implements OnInit {

  constructor(private service: SwitchService) { }
finscore=this.service.score.toFixed(2);;

  ngOnInit() {
  }
  
  reload(){
    window.location.reload();
  }
}
