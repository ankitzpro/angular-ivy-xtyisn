import { Component, OnInit } from '@angular/core';
import { MainService} from '../../main.service';
@Component({
  selector: 'finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
})
export class FinishComponent implements OnInit {

  constructor(private service: MainService) { }
finscore=this.service.score;

  ngOnInit() {
  }

  reload(){
    window.location.reload();
  }
}
