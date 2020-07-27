import { Component, OnInit } from '@angular/core';
import { GuessWhatService } from 'src/guess-what/guess-what.service';

@Component({
  selector: 'finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
})
export class FinishComponent implements OnInit {

  constructor(private service: GuessWhatService) { }
finscore=this.service.level1_score + this.service.level2_score + this.service.level3_score;

  ngOnInit() {
  }

  reload(){
    window.location.reload();
  }
}
