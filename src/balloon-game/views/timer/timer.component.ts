import { Component, OnInit } from '@angular/core';
import { BalloonService} from '../../balloon.service';
@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: [ './timer.component.scss' ],
})
export class TimerComponent implements OnInit {

  constructor(private service: BalloonService) { }
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
        if(this.service.level>=15){
          //this.routers.navigate(['/start'])
          this.service.changeCompo('Finish');
          clearInterval(this.intervalId);
        }
        else if(this.service.compoShowValue=='Finish'){
          clearInterval(this.intervalId);
        }
       else{
        this.service.changeCompo('Game');
        clearInterval(this.intervalId);
      }
    }
    }, 1000);
  }
}
