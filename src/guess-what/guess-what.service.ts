import { Injectable,Output,EventEmitter } from '@angular/core';

import { BehaviorSubject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GuessWhatService {
  level=0;
  level1_score=0;
  level2_score=0;
  level3_score=0;
  compoShowValue='Start';
  timervalue='5:00'
  private compoShow: BehaviorSubject<string> = new BehaviorSubject<string>(this.compoShowValue);
  private timer: BehaviorSubject<string> = new BehaviorSubject<string>(this.timervalue);
  compoShow$: Observable<string> = this.compoShow.asObservable();
  timer$: Observable<string> = this.timer.asObservable();
  anstext='';
  constructor() { }
  showAlert(message: any){
    alert(message);
  }
  customConsole(consoleData: any, title: any= 'Data'){
    console.log(title, consoleData);
  }
  changeCompo(comp:string){
    this.compoShowValue=comp;
    this.compoShow.next(this.compoShowValue);
  }
}
