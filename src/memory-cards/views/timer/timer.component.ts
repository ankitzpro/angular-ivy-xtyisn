import { Component, OnInit } from '@angular/core';
import { CardService} from '../../card.service';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {

  constructor(private service: CardService) { }
anstext:String;
intervalId: number = 0;
message: string = '';
seconds: number = 5;
levels:number;

  ngOnInit() {
    this.levels=this.service.level;
    console.log(this.levels);
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
          this.service.level++;
          this.service.levelUpgrade();
        this.service.changeCompo('Cards');
      }
    }
    }, 1000);
  }
}
