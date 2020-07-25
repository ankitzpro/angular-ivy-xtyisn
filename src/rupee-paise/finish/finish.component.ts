import { Component, OnInit } from '@angular/core';
import { RupeePaiseService } from '../rupee-paise.service';
@Component({
  selector: 'finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
})
export class FinishComponent implements OnInit {

  constructor(private service: RupeePaiseService) { }
finscore=this.service.score;;

  ngOnInit() {
  }

  reload(){
    window.location.reload();
  }
}
