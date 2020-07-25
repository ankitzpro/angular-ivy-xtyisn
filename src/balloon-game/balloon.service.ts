import { Injectable,Output,EventEmitter } from '@angular/core';

import { BehaviorSubject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BalloonService {
@Output() scoreData:EventEmitter<any>= new EventEmitter(); 
  level=0;
  compoShowValue='Start';
  timervalue='5:00'
  private compoShow: BehaviorSubject<string> = new BehaviorSubject<string>(this.compoShowValue);
  private timer: BehaviorSubject<string> = new BehaviorSubject<string>(this.timervalue);
  compoShow$: Observable<string> = this.compoShow.asObservable();
  timer$: Observable<string> = this.timer.asObservable();
anstext='';

finalscore=0;
totpoints=0;
intervalId=0;
seconds=59;
minutes=5;

scorecalc(locscore){
this.finalscore=this.finalscore+locscore;
this.anstext='Total Points: '+this.finalscore+' \n Points scored in last stage: '+locscore;
}
  sendValues(){
  this.scoreData.emit(this.finalscore);
}
changeCompo(comp:string){
  this.compoShowValue=comp;
  this.compoShow.next(this.compoShowValue);
}

 countDown(): void {
  this.intervalId = window.setInterval(() => {
    if(this.seconds==59){
      this.minutes=this.minutes-1;
    }
    
    this.timervalue=""+this.minutes+":"+this.seconds;
    this.timer.next(this.timervalue);
    this.seconds -= 1;
    if (this.seconds === 0 ) {
      if(this.minutes==0){
        clearInterval(this.intervalId);
        this.changeCompo('Finish');
        this.timer.next('Time Up');
      }
      else{
        this.seconds=59;
      }
  }
  }, 1000);
}
}