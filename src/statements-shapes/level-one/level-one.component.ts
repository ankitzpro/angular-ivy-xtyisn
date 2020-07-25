import { Component, OnInit } from '@angular/core';
import { StatementService } from '../statement.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.scss']
})
export class LevelOneComponent implements OnInit {
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
  seconds:number=20;
  level:number=1;
  timmerCountDown:number=5;
  countDownId=null;
  timerDownId:any;
  notifier: NotifierService;
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
    // if(this.service.totanswers.length<4){
      var random  = Math.floor(Math.random()*this.service.Stage1Que.length);
      this.question=this.service.Stage1Que[random].question;
      this.shape=this.service.Stage1Que[random].shape;
      this.color=this.service.Stage1Que[random].color;
      this.answer=this.service.Stage1Que[random].answer;
      this.service.Stage1Que.splice(random,1);
      this.l1_countDown();
      this.timmer();
    // }else{
    //   this.service.changeCompo('Level2');
    // }
  }
  result(ans: any){
    this.questionOn++;
    this.service.question++;
    this.userAnswer = ans;
    this.myfunction();
    // this.service.customConsole(this.userAnswer +"=="+ this.answer);
      if( this.userAnswer == this.answer){
        this.service.l1_score++;
        this.service.totanswers.push(1);
        this.score = this.service.l1_score;
      }
      
      this.service.changeCompo('Timer');
  }

  levelCheck(){
    if(this.service.question==14){
      this.service.changeCompo('Finish')
    }
    else if(this.service.totanswers.length==4){
      this.service.changeCompo('Level2');
    }
    else{
      this.countDownId=null;
this.showQuestion=false;
this.startCountDown=3;
this.countDown();
  }
  }
  l1_countDown() {
    this.intervalId = setTimeout(() => {
      this.startCountDown -= 0.1;
      this.service.question++;
            this.questionOn++;
            this.myfunction();
            this.service.changeCompo('Timer');
            this.seconds=20;
        }, 5000);
        // }, 5000000000000);
      }
      clearTimer(){clearTimeout(this.intervalId);}
  private countDown(){
    this.countDownId = setInterval(() => {
      this.startCountDown -= 1;
      this.startCountDown=this.startCountDown;
      if (this.startCountDown === 0) {
        
        this.startCountDown=undefined;
        this.showQuestion=true;
        clearInterval(this.countDownId);
        this.getQuestion();
      }
    // }, 10000000000000);
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
    // }, 10000000000);
    }, 100);
    this.timmerCountDown = 5;

  }
  myfunction(){clearInterval(this.timerDownId);}
}
