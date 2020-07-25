import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RupeePaiseService {
  l1_score=0;
  l2_score=0;
  l3_score=0;
  score=this.l1_score + this.l2_score + this.l3_score;
  showQuestion:boolean=false;
  compoShowValue='Start';
  private compoShow: BehaviorSubject<string> = new BehaviorSubject<string>(this.compoShowValue);

  compoShow$: Observable<string> = this.compoShow.asObservable();
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
