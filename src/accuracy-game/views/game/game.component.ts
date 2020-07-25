import { Component} from '@angular/core';
import { AccuracyService} from '../../accuracy.service';
import { NotifierService } from 'angular-notifier';




@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})

export class GameComponent  {
  constructor(private service:AccuracyService, notifierService: NotifierService

  ) {
    this.notifier = notifierService;}


  eventText = '';
  level=this.service.level;
 numstring:any='';
  progress:any;
  whitespace:any;
  randpos:number;
  seconds:number=this.service.seconds;
  notifier: NotifierService;
  ngOnInit() {

    this.progress=Math.floor(Math.random() * 90)+10;
    this.whitespace=100-this.progress;
    this.countDown();
}




  insertChar(char) {
    var a = '' + this.numstring + char;
    var y: number = +a;
    if (y < 100) {
      this.numstring = '' + this.numstring + char;
    } else {
      alert('Number cannot be greater than 99');
    }
    console.log(this.numstring);
  }
  insertNum(a) {
    this.numstring = a;
  }

  private countDown(): void {
    this.service.intervalId = window.setInterval(() => {
      this.seconds -= 0.1;
      this.service.seconds = this.seconds;
      if (this.seconds.toFixed(1) == '0.0') {
        this.service.anstext = "You didn't attempted";

        this.service.changeCompo('Timer');
      }
    }, 100);
    // }, 500000000000000);
  }

  submit() {
    var diff = this.progress - this.numstring;
    this.service.scoreCalc(Math.abs(diff));
    this.service.changeCompo('Timer');
  }

  clear(){
    this.numstring='';
  }
}
