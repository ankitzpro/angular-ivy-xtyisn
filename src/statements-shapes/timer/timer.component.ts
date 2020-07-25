import { Component, OnInit } from '@angular/core';
import { StatementService} from '../statement.service';
@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: [ './timer.component.scss' ],
})
export class TimerComponent implements OnInit {

  constructor(private service: StatementService) { }
anstext:String;
intervalId: number = 0;
message: string = '';
seconds=this.service.timersec;
levels=this.service.question;

  ngOnInit() {
this.countDown();
  }
  private countDown(): void {
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0 ) {
        this.service.timersec=3;
        if(this.service.question==14){
          this.service.changeCompo('Finish');
        }
        else 
        {
          if(this.service.totanswers.length<=4){
        this.service.changeCompo('Level1');
      }
      else if(this.service.totanswers.length<=8){
        this.service.changeCompo('Level2');
      } else{
        this.service.changeCompo('Level3');
      }
    }
    }
    // }, 100000000);
    }, 1000);
  }
}
