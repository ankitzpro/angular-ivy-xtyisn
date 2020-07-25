import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { RupeePaiseService } from '../rupee-paise.service';

@Component({
  selector: 'level-three',
  templateUrl: './level-three.component.html',
  styleUrls: ['./level-three.component.scss']
})
export class LevelThreeComponent implements OnInit {
  question:string;
  shape:string;
  color:string;
  answer:string;
  text:string="Choose if the Statement is Correct or Not";
  intervalId:any;
  score:number=0;
  questionOn=1;
  showQuestion:boolean=false;
  noOfQuestions=5;
  startCountDown:number=5;
  seconds:number=20;
  level:number=1;
  timmerCountDown:number=20;
  timerDownId:any;
  billing_amount:any;
  correct_answer:any;
  userAnswer:any=0;
  fifty_rupees:Array<any>=[50,50,50,50,50];
  twenty_rupees:Array<any>=[20,20,20,20,20];
  ten_rupees:Array<any>=[10,10,10,10,10];
  five_rupees:Array<any>=[5,5,5,5,5];
  two_rupees:Array<any>=[2,2,2,2,2];
  one_rupees:Array<any>=[1,1,1,1,1];
  one_paise:Array<any>=[0.01,0.01,0.01,0.01,0.01];
  two_paise:Array<any>=[0.02,0.02,0.02,0.02,0.02];
  five_paise:Array<any>=[0.05,0.05,0.05,0.05,0.05];
  ten_paise:Array<any>=[0.10,0.10,0.10,0.10,0.10];
  twentyfive_paise:Array<any>=[0.25,0.25,0.25,0.25,0.25];
  twenty_paise:Array<any>=[0.20,0.20,0.20,0.20,0.20];
  fifty_paise:Array<any>=[0.50,0.50,0.50,0.50,0.50];
  level3Que = [53.73,93.27,64.83,78.31,83.51,72.21,57.41,66.36,89.89,81.35,63.28,74.48,53.71,74.94,65.17,73.21,87.52,76.83,56.31,83.62,52.74,93.13,63.72,85.15,81.67,57.24,61.62,76.31,69.43,83.61,77.47];
  notifier: NotifierService;
  constructor(
    private service: RupeePaiseService,
    notifierService: NotifierService) { 
      this.notifier = notifierService;
    }
  ngOnInit() {
    this.countDown();
  }
  ngOnDestroy() {
    this.clearTimer();
    this.myfunction();
  }
  private countDown(){
    this.showQuestion=false;
    this.startCountDown=5;
      var countDownId = window.setInterval(() => {
        this.startCountDown -= 1;
        this.startCountDown=this.startCountDown;
        if ((this.startCountDown).toFixed(1) == '0.0') {
          this.showQuestion=true;
          clearInterval(countDownId);
          this.getQuestion();
          // this.service.showAlert("satrt");
        } 
      }, 1000);
    }
    getQuestion(){
      this.userAnswer = 0;
      this.clearTimer();
      if(this.service.l3_score <= 3){
        var random:any  = this.level3Que[Math.floor(Math.random()*this.level3Que.length)];
        this.billing_amount = random;
        this.correct_answer = 100 - random;
      }else{
        this.service.changeCompo('Finish');
      }
      this.l3_countDown();
      this.timmer();
    }
    checkAnswer(answer:any){
      this.clearTimer();
      if(parseFloat(this.correct_answer).toFixed(2)==parseFloat(answer).toFixed(2)){
        this.service.l3_score++
        this.notifier.notify("success","Correct Answer");
        this.countDown();
        if(this.service.l3_score >= 3){
          this.service.changeCompo('Finish');
        }
        this.refillNotes();
        this.getQuestion();
        
      }else{
        this.notifier.notify("error","Incorrect Answer!");
        this.countDown();
        this.refillNotes();
        this.getQuestion();
      }
    }
    clearTimer(){clearTimeout(this.intervalId);}
  
    remove(notes:string){
      if(notes == "fifty_rupees" && this.fifty_rupees.length <= 5 && this.fifty_rupees.length > 0){
          this.fifty_rupees.pop();
          this.userAnswer += 50;
        }else if(notes == "twenty_rupees" && this.twenty_rupees.length <= 5 && this.twenty_rupees.length > 0){
          this.twenty_rupees.pop();
          this.userAnswer += 20;
        }else if(notes == "ten_rupees" && this.ten_rupees.length <= 5 && this.ten_rupees.length > 0){
          this.ten_rupees.pop();
          this.userAnswer += 10;
        }else if(notes == "five_rupees" && this.five_rupees.length <= 5 && this.five_rupees.length > 0 ){
          this.five_rupees.pop();
          this.userAnswer += 5;
        }else if(notes == "two_rupees" && this.two_rupees.length <= 5 && this.two_rupees.length > 0 ){
          this.two_rupees.pop();
          this.userAnswer += 2;
        }else if(notes == "one_rupees" && this.one_rupees.length <= 5 && this.one_rupees.length > 0 ){
          this.one_rupees.pop();
          this.userAnswer += 1;
        }else if(notes == 'fifty_paise' && this.fifty_paise.length <= 5 && this.fifty_paise.length > 0){
          this.fifty_paise.pop();
          this.userAnswer += 0.50;
        }else if(notes == 'twentyfive_paise' && this.twentyfive_paise.length <=5 && this.twentyfive_paise.length > 0){
          this.twentyfive_paise.pop();
          this.userAnswer += 0.25;
        }
        else if(notes == 'twenty_paise' && this.twenty_paise.length <=5 && this.twenty_paise.length > 0){
          this.twenty_paise.pop();
          this.userAnswer += 0.20;
        }else if(notes =='ten_paise' && this.ten_paise.length <=5 && this.ten_paise.length > 0){
          this.ten_paise.pop();
          this.userAnswer += 0.10;
        }else if(notes =='five_paise' && this.five_paise.length <=5 && this.five_paise.length > 0){
          this.five_paise.pop();
          this.userAnswer += 0.05;
        }else if(notes =='two_paise' && this.two_paise.length <=5 && this.two_paise.length > 0){
          this.two_paise.pop();
          this.userAnswer += 0.02;
        }else if(notes =='one_paise' && this.one_paise.length <=5 && this.one_paise.length > 0){
          this.one_paise.pop();
          this.userAnswer += 0.01;
        }else{
          this.notifier.notify("default","Not Available Now");
        }
        console.log(this.userAnswer);
    }
    refillNotes(){
      this.fifty_rupees=[50,50,50,50,50];
      this.twenty_rupees=[20,20,20,20,20];
      this.ten_rupees=[10,10,10,10,10];
      this.five_rupees=[5,5,5,5,5];
      this.two_rupees=[2,2,2,2,2];
      this.one_rupees=[1,1,1,1,1];
      this.one_paise=[0.01,0.01,0.01,0.01,0.01];
      this.two_paise=[0.02,0.02,0.02,0.02,0.02];
      this.five_paise=[0.05,0.05,0.05,0.05,0.05];
      this.ten_paise=[0.10,0.10,0.10,0.10,0.10];
      this.twentyfive_paise=[0.25,0.25,0.25,0.25,0.25];
      this.twenty_paise=[0.20,0.20,0.20,0.20,0.20];
      this.fifty_paise=[0.50,0.50,0.50,0.50,0.50];
      this.userAnswer = 0;
    }
    l3_countDown() {
      this.intervalId = setTimeout(() => {
        this.startCountDown -= 0.1;
              this.questionOn++;
              this.myfunction();
              this.notifier.notify("warning","Not Attempted");
              this.countDown();
              this.seconds=20;
          }, 20000);
        }

        myfunction(){clearInterval(this.timerDownId);}
  
    private timmer(){
      clearInterval(this.timerDownId);
    this.timerDownId = window.setInterval(() => {
      this.timmerCountDown -= 1;
      this.timmerCountDown=this.timmerCountDown;
      if ((this.timmerCountDown).toFixed(1) == '0.0') {
        this.service.customConsole(this.timmerCountDown);
        clearInterval(this.timerDownId);
        } 
    }, 1000);
    this.timmerCountDown = 20;
      
    }
}
