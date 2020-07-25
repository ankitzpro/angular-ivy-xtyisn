import { Component, OnInit } from '@angular/core';
import { StatementService } from '../statement.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'level-two',
  templateUrl: './level-two.component.html',
  styleUrls: ['./level-two.component.scss']
})
export class LevelTwoComponent implements OnInit {
  question:string;
  shape:string;
  color:string;
  answer:string;
  userAnswer:string;
  text:string="Choose if the Statement is Correct or Not";
  intervalId:any;
  score:number=0;
  questionOn=1;
  showQuestion:boolean=true;
  noOfQuestions=5;
  startCountDown:number=5;
  seconds:number=30;
  level:number=2;
  notifier: NotifierService;
  timmerCountDown:number=5;
  timerDownId:any;
  countDownId=null;
  constructor(
    private service: StatementService,
    notifierService: NotifierService) { 
      this.notifier = notifierService;
    }
    
  ngOnInit() {
    this.getQuestion();
  }
  ngOnDestroy() {
    this.clearTimer();
  }
  getQuestion(){
    this.clearTimer();
    //if(this.questionOn <= this.noOfQuestions){
      var random  = Math.floor(Math.random()*this.service.Stage2Que.length);
      this.question=this.service.Stage2Que[random].question;
      this.shape=this.service.Stage2Que[random].shape;
      this.color=this.service.Stage2Que[random].color;
      this.answer=this.service.Stage2Que[random].answer;
      this.service.Stage2Que.splice(random,1)
      this.l2_countDown();
      this.timmer();
    // }else{
    //   this.service.showAlert("Your Level-Two Score Is "+ this.service.l2_score + " OK For Next Level");
    //   this.service.changeCompo('Level3');
    // }
  }
  result(ans: any){
    this.service.question++;
    this.questionOn++
    this.userAnswer = ans;
    this.myfunction();
      if( this.userAnswer == this.answer){
        this.service.l2_score++;
        this.service.totanswers.push(1);
        this.score = this.service.l2_score;
        //this.getQuestion();
      }
      // }else{  this.questionOn++
      //     this.getQuestion();
      // }
    this.service.changeCompo('Timer');
  }
  levelCheck(){
    if(this.service.question==14){
      this.service.changeCompo('Finish')
    }
    else  if(this.service.totanswers.length>=8){
      this.service.changeCompo('Level3');
    }
    else{
this.showQuestion=false;
this.startCountDown=3;
this.countDown();
  }
  }
  l2_countDown() {
    this.intervalId = setTimeout(() => {
      this.startCountDown -= 0.1;
      this.service.question++;
            this.questionOn++;
            this.myfunction()
            this.service.changeCompo('Timer');
            this.seconds=20;
        }, 5000);
      }
      clearTimer(){clearTimeout(this.intervalId);}
  private countDown(){
    this.countDownId = window.setInterval(() => {
      this.startCountDown -= 1;
      if (this.startCountDown === 0) {
        this.showQuestion=true;
        clearInterval(this.countDownId);
        this.seconds=undefined;
        this.getQuestion();
      } 
    }, 1000);
  }

  
  private timmer(){
    this.timerDownId = window.setInterval(() => {
      this.timmerCountDown -= 0.1;
      this.timmerCountDown=this.timmerCountDown;
      if ((this.timmerCountDown).toFixed(1) == '0.0') {
        this.service.customConsole(this.timmerCountDown);
        clearInterval(this.timerDownId);
        } 
    }, 100);
    this.timmerCountDown = 5;
    
  }
  myfunction(){clearInterval(this.timerDownId);}
}
