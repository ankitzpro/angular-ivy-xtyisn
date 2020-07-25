import { Component, OnInit } from '@angular/core';
import { StatementService } from '../statement.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'level-three',
  templateUrl: './level-three.component.html',
  styleUrls: ['./level-three.component.scss']
})
export class LevelThreeComponent implements OnInit {
  question:string;
  shape1:string;
  color1:string;
  shape2:string;
  color2:string;
  answer:string;
  userAnswer:string;
  text:string="Choose if the Statement is Correct or Not";
  intervalId:any;
  score:number=0;
  questionOn=1;
  showQuestion:boolean=true;
  noOfQuestions=5;
  startCountDown:number=10;
  seconds:number=20;
  level:number=3;
  timmerCountDown:number=5;
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
    this.service.l1_score=0;
    this.service.l2_score=0;
    this.service.l3_score=0;
  }
  getQuestion(){
    this.clearTimer();
    //if(this.questionOn <= this.noOfQuestions){
      var random  = Math.floor(Math.random()*this.service.Stage3Que.length);
      this.question=this.service.Stage3Que[random].question;
      this.shape1=this.service.Stage3Que[random].shape1;
      this.color1=this.service.Stage3Que[random].color1;
      this.shape2=this.service.Stage3Que[random].shape2;
      this.color2=this.service.Stage3Que[random].color2;
      this.answer=this.service.Stage3Que[random].answer;
      this.l3_countDown();
      this.timmer();
    // }else{
    //   this.service.score = this.service.l1_score+this.service.l2_score+this.service.l3_score;
    //   this.service.showAlert("Your Total Score Is "+ this.service.score);
    //   this.service.changeCompo('Finish');
    // }
  }
  result(ans: any){
    this.questionOn++
    this.service.question++;
    this.userAnswer = ans;
    this.myfunction();
    // this.service.customConsole(this.userAnswer +"=="+ this.answer);
      if( this.userAnswer == this.answer){
        this.notifier.notify("success","Question "+this.questionOn + " is Correct Answer");
        this.service.l3_score++;
        this.service.totanswers.push(1);
        this.score = this.service.l3_score;
        this.getQuestion();
      }
      // }else{
      //   this.notifier.notify("error","Question "+this.questionOn + " is Incorrect Answer!");
      //     this.questionOn++
      //     this.getQuestion();
      // }
        this.service.changeCompo('Timer');
  }

  l3_countDown() {
    this.intervalId = setTimeout(() => {
      this.startCountDown -= 0.1;
      this.service.question++;
            this.questionOn++;
            this.myfunction();
            this.service.changeCompo('Timer');
            this.seconds=20;
        // }, 5000000000000);
        }, 5000);
      }
      clearTimer(){clearTimeout(this.intervalId);}
  private countDown(){
    var countDownId = window.setInterval(() => {
      this.startCountDown -= 1;
      this.startCountDown=this.startCountDown;
      if ((this.startCountDown).toFixed(1) == '0.0') {
        this.showQuestion=true;
        clearInterval(countDownId);
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
