import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../../switch.service';
//import { Router} from '@angular/router';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: [ './timer.component.scss' ],
})
export class TimerComponent implements OnInit {
  constructor(private service: SwitchService) //,private routers:Router
  {}
  anstext: String;
  intervalId: number = 0;
  message: string = '';
  seconds: number = 5;
  levels=this.service.level;

  ngOnInit() {
    this.anstext = this.service.anstext;
    this.countDown();
  }
  private countDown(): void {
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        if (this.service.level >= 4) {
          this.service.changeCompo('Finish');
        } else {
          this.service.levelupgrade();
          this.service.level++;
          this.service.changeCompo('Game');
        }
      }
    // }, 10000000000000);
    }, 1000);
  }
}
