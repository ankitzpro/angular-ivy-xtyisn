import { Injectable,Output,EventEmitter } from '@angular/core';

import { BehaviorSubject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SwitchService {
@Output() scoreData:EventEmitter<any>= new EventEmitter(); 
  level=0;
compoShowValue='Start';
    private compoShow: BehaviorSubject<string> = new BehaviorSubject<string>(this.compoShowValue);

    compoShow$: Observable<string> = this.compoShow.asObservable();
anstext='';
totanswers=[];
intervalId: number = 0;
seconds: number = 12;
score=0;

  clearTimer() { clearInterval(this.intervalId); }

  
  levelupgrade(){
    if(this.totanswers.length>1){
      this.seconds=10;
    }
    else{
      this.seconds=12;
    }
  }
  changeCompo(comp:string){
    this.compoShowValue=comp;
    this.compoShow.next(this.compoShowValue);
  }
}