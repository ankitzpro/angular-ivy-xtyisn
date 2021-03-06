import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject,Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
compoShowValue='Blank';
private compoShow: BehaviorSubject<string> = new BehaviorSubject<string>(this.compoShowValue);

compoShow$: Observable<string> = this.compoShow.asObservable();
  anstext='';
  pageno=0;
  word1='';
  word2='';
  answer='';
  i=0;
intervalId: number = 0;
seconds: number = 5;
score=0;
data:any;
totanswers=[];
  text="Compare the 2 words and decide whether their meaning is almost the same, almost the opposite, or they have another relationship";
   quesarray=[{'difficulty':2,'seconds':12},
    {'difficulty':1,'seconds':12},
    {'difficulty':1,'seconds':12},
    {'difficulty':1,'seconds':12},
    {'difficulty':1,'seconds':12},
    {'difficulty':1,'seconds':12},
    {'difficulty':1,'seconds':8},
    {'difficulty':1,'seconds':8},
    {'difficulty':1,'seconds':8},
    {'difficulty':1,'seconds':8}]
    temparray=[];
  constructor(private firestore: AngularFirestore) { }

  changetext(){
    this.text="If they have the same meaning, swipe left. For almost opposites, swipe right. For all other words pairs, swipe down";

  }

  // question(){
  //   this.seconds=this.quesarray[this.i].seconds;
  //   for(var j=0;j<this.data.length;j++){
  //   if(this.data[j].difficulty==this.quesarray[this.i].difficulty){
  //     this.temparray.push({'word1':this.data[j].word1,'word2':this.data[j].word2,'relation':this.data[j].relation})
  //   }
  //   }
  //   console.log(this.temparray);
  //   var rand= Math.floor(Math.random() * (this.temparray.length));
  //   this.word1=this.temparray[rand].word1;
  //   this.word2=this.temparray[rand].word2;
  //   this.answer=this.temparray[rand].relation;
  //   this.i=this.i+1;
  // }

  question(){
    if(this.totanswers.length<6){
      this.seconds=8;
    }
    else{
      this.seconds=6;
    }
    var rand= Math.floor(Math.random() * (this.data.length));


       this.word1=this.data[rand].word1;
       this.word2=this.data[rand].word2;
       this.answer=this.data[rand].relation;
       this.data.splice(rand,1);
       this.i=this.i+1;
  }

  userData(data){
    console.log(data);

  }


  clearTimer() { clearInterval(this.intervalId); }

  getAnswer(eventtext){
    switch(eventtext) {
          case 'left': {
            this.anstext=this.answer=='Almost the Opposite' ? 'Correct Answer' : 'Incorrect Answer';
             break;
          }
          case 'right': {
            this.anstext=this.answer=='Almost the same' ? 'Correct Answer' : 'Incorrect Answer';
            break;
         } case 'down': {
          this.anstext=this.answer=='Totally Unrelated' ? 'Correct Answer' : 'Incorrect Answer';
          break;
          }
       }
       if(this.anstext=='Correct Answer'){
         //this.score=this.score+this.seconds;
         this.score++;
         this.totanswers.push(1);
       }
  }
  readData() {
    return this.firestore.collection('linkswipe').snapshotChanges().subscribe(data => {
      console.log(data);
      this.data = data.map(e => {
        return {
          id: e.payload.doc.data()['id'],
          isEdit: false,
          word1: e.payload.doc.data()['word1'],
          word2: e.payload.doc.data()['word2'],
          relation: e.payload.doc.data()['relation'],
          difficulty: e.payload.doc.data()['difficulty'],
        };
      })

    });

}
compoChange(comp:any){
this.compoShowValue=comp;
this.compoShow.next(this.compoShowValue);
}
}
