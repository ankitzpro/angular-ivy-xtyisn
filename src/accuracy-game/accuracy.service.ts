import { Injectable,Output,EventEmitter } from '@angular/core';

import { BehaviorSubject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccuracyService {
@Output() scoreData:EventEmitter<any>= new EventEmitter(); 
  level=0;
compoShowValue='Start';
    private compoShow: BehaviorSubject<string> = new BehaviorSubject<string>(this.compoShowValue);

    compoShow$: Observable<string> = this.compoShow.asObservable();
anstext='';

intervalId: number = 0;
seconds: number = 5;
score=0;
diff=0;
totanswers=[];
  clearTimer() { clearInterval(this.intervalId); }

  scoreCalc(diff:any){
    this.clearTimer();
    this.seconds=5;

    if(diff<7 && this.totanswers.length<4){
      this.score++;
      this.totanswers.push(1);
    }
    else if(diff<5 && this.totanswers.length<7 && this.totanswers.length>3){
      this.score++;
      this.totanswers.push(1);
    }
    else if(diff<3 && this.totanswers.length<10  && this.totanswers.length>6){
      this.score++;
      this.totanswers.push(1);
    }
    else if(diff<2 && this.totanswers.length<13 && this.totanswers.length>9){
      this.score++;
      this.totanswers.push(1);
    }
   // this.score=this.score+this.seconds;
    //this.diff=this.diff+diff;
  //   if(this.level==10){
  //     var diffper=100-(this.diff/10);
  //     this.anstext='Time Score: '+(this.score).toFixed(2)+'\n Accuracy: '+diffper;
  //  }
  //  else {
  //      if(diff<3){
  //        this.anstext='Difference: '+diff+'\n Excellent';
  //      }
  //       else if(diff>=3 && diff<6){
  //         this.anstext='Difference: '+diff+'\n Great';
  //      }
  //     else if(diff>=6 && diff<9){
  //       this.anstext='Difference: '+diff+'\n Very Well';
  //     }
  //     else if(diff>9){
  //       this.anstext='Difference: '+diff;
  //     }
  //   }
  }
  changeCompo(comp:string){
    this.compoShowValue=comp;
    this.compoShow.next(this.compoShowValue);
  }
}
