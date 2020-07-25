import { Component, OnInit } from '@angular/core';
import { StatementService} from '../statement.service';
@Component({
  selector: 'finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
})
export class FinishComponent implements OnInit {

  constructor(private service: StatementService) { }
finscore=this.service.score;;

  ngOnInit() {
  }

  reload(){
    window.location.reload();
  }
}
