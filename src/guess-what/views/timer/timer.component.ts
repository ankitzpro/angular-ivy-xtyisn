import { Component, OnInit } from '@angular/core';
import { GuessWhatService } from 'src/guess-what/guess-what.service';
@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: [ './timer.component.scss' ],
})
export class TimerComponent implements OnInit {

  constructor(private service: GuessWhatService) { }
anstext:String;
intervalId: number = 0;
message: string = '';
seconds: number = 5;
// levels:number=0;
levels=this.service.level;

  ngOnInit() {
this.anstext=this.service.anstext;
this.countDown();
  }
  private countDown(): void {
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0 ) {
        if(this.service.level>=10){
          this.service.changeCompo('Finish');
        }
        else{
        this.service.changeCompo('Game');
      }
    }
    // }, 100000000);
    }, 1000);
  }
}
