import { Injectable ,Output,EventEmitter} from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';

import { BehaviorSubject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(
   // private firestore: AngularFirestore
  ) { }
  @Output() scoreData:EventEmitter<any>= new EventEmitter(); 
  totanswers=[];
compoShowValue='Start';
private compoShow: BehaviorSubject<string> = new BehaviorSubject<string>(this.compoShowValue);

compoShow$: Observable<string> = this.compoShow.asObservable();
level=0;

intervalId: number = 0;
anstext='';
seconds=20;
score=0;
noofcards=4;
textMaker(text:string){
  this.anstext=text;

}

levelUpgrade(){
if(this.totanswers.length<4){
  this.seconds=20;
  this.noofcards=4;
}
else if(this.totanswers.length>=4 && this.totanswers.length<8){
  this.seconds=20;
  this.noofcards=5;
}
else if(this.totanswers.length>=8 && this.totanswers.length<12){
  this.seconds=20;
  this.noofcards=6;
}
else if(this.totanswers.length>=12 && this.totanswers.length<16){
  this.seconds=20;
  this.noofcards=8;
}
else{
  this.seconds=20;
  this.noofcards=8;
}
}
sendValues(){
  this.scoreData.emit(this.score);
}
readData() {
 // return this.firestore.collection('linkswipe').snapshotChanges();
}
changeCompo(comp:string){
  this.compoShowValue=comp;
  this.compoShow.next(this.compoShowValue);
}

clearTimer(): void {
  clearInterval(this.intervalId);
}
}