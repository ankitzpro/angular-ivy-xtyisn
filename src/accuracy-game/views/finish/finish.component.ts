import { Component, OnInit } from '@angular/core';
import { AccuracyService} from '../../accuracy.service';
@Component({
  selector: 'finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
})
export class FinishComponent implements OnInit {

  constructor(private service: AccuracyService) { }
finscore=this.service.score;;

  ngOnInit() {
  }

  reload(){
    window.location.reload();
  }
}
