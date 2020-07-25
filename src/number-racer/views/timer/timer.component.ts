import { Component, OnInit } from '@angular/core';
import { MainService} from '../../main.service';
@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: [ './timer.component.scss' ],
})
export class TimerComponent implements OnInit {

  constructor(private service: MainService) { }
anstext:String;
intervalId: number = 0;
message: string = '';
seconds: number = 5;
levels=this.service.level;

  ngOnInit() {
this.anstext=this.service.anstext;
this.countDown();
  }
  private countDown(): void {
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0 ) {
        if(this.service.level>=16){
          this.service.changeCompo('Finish');
        }
        else{
          this.service.levelUpdate();
        this.service.changeCompo('Game');
      }
    }
    // }, 100000000);
    }, 1000);
  }
}
