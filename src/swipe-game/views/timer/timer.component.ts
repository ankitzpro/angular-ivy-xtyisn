import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  constructor(private serv: MyserviceService) {}
  anstext: String;
  intervalId: number = 0;
  message: string = '';
  seconds: number = 5;
  levels = this.serv.i;
  ngOnInit() {
    this.anstext = this.serv.anstext;
    this.countDown();
  }
  private countDown(): void {
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        if (this.serv.i >= 15) {
          // this.routers.navigate(['/blank'],{ skipLocationChange: true })
          this.serv.compoChange('Finish');
        } else {
          this.serv.question();
          //this.routers.navigate(['/question'],{ skipLocationChange: true })
          this.serv.compoChange('Question');
        }
      }
    }, 1000);
  }
}
