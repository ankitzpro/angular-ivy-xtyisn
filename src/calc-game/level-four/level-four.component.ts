import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'level-four',
  templateUrl: './level-four.component.html',
  styleUrls: ['./level-four.component.scss']
})
export class LevelFourComponent implements OnInit {
  firstInput:number;
  secondInput:number;
  thirdInput:number;
  rhs:number;
  lhs:any;
  rmVal:boolean;
  question_no:number =1;
  score:number;
  c_score:any;
  intervalId: any = 0;
  seconds: number = 10;
  showtimer=false;
  l4_score:number= 0;
  countDownId:any;
  level:number=4;
  noOfQustion:number=4;
  max_question_no =5;
  operator1:any='';
  operator2:any='';
  showQuestion:boolean=true;
  timmer:number=5;
  notifier: NotifierService;
  constructor(
    private service: CalcService,
    notifierService: NotifierService) { 
      this.notifier = notifierService;
    }

  ngOnInit() {
    this.getRhs();
    // this.clearTimer()
    // this.l4_score = this.service.l4_score;
    // this.getRhs();
    // this.countDown();
  }
  ngOnDestroy() {
    this.clearTimer();
    this.clearCountDown();
  }

  insertChar(character: number): void {
    
    if(!this.firstInput){
      this.firstInput = character;
      
    }else if(!this.secondInput){
      this.secondInput = character;
 
    }else if(!this.thirdInput){
      this.thirdInput = character;
    }
    if(this.firstInput && this.secondInput && this.thirdInput){
      this.result();
    }    
  }

  getRhs() { // min and max included
    this.clearTimer(); 
    this.getOperator(); 
    // this.rhs= Math.floor(Math.random() * (max - min + 1) + min);
    if(this.operator1 == "-" && this.operator2 == "/"){
      this.rhs= Math.floor(Math.random() * (8 - 1 + 1) + 1);
    }else if(this.operator1 == "*" && this.operator2 == "-"){
      this.rhs= Math.floor(Math.random() * (80 - 0 + 1) + 0);
    }else if(this.operator1 == "/" && this.operator2 == "-"){
      this.rhs= Math.floor(Math.random() * (8 - 1 + 1) + 1);
    }else if(this.operator1 == "+" && this.operator2 == "/"){
      this.rhs= Math.floor(Math.random() * (18 - 2 + 1) + 2);
    }
    this.l4_score = this.service.l4_score;
    this.clearTimer();
    this.countDown();
   // this.clearCountDown();
    //if(this.question_no <= this.max_question_no){
      this.clearTimer();
      this.l4_countDown();
    //  this.clearCountDown();
   // }else{
      //this.service.showAlert('Your Final Score is '+ this.service.score);
      //this.service.changeCompo('Finish');
    //}
    this.removeChar(1);
  }
  removeChar(rmVal){
    this.firstInput=null
    this.secondInput=null
    this.thirdInput=null
  }
  l4_countDown() {
    this.showtimer=true;
    this.intervalId = setTimeout(() => {
            this.question_no++;
            this.service.question++;
            this.clearTimer();
            this.clearCountDown();
            this.service.changeCompo('Timer');
            this.seconds=10;
        }, 10000);
        //this.clearCountDown();
      }
      clearTimer(){clearTimeout(this.intervalId);}

      private countDown(){
        this.countDownId = window.setInterval(() => {
          this.seconds -= 0.1;
          this.seconds=this.seconds;
          if ((this.seconds).toFixed(1) == '0.0') {
            console.log("wait");
          } 
        }, 100);
        this.seconds = 10;
      }
      clearCountDown(){clearTimeout(this.countDownId);}
      result(){
        this.question_no++;
        this.service.question++;
        switch(this.operator1) {
            case "-":
                this.lhs = this.firstInput - this.secondInput / this.thirdInput;
                break;
            case "*":
              this.lhs = this.firstInput * this.secondInput - this.thirdInput;
              break;
            case "/":
              this.lhs = this.firstInput / this.secondInput - this.thirdInput;
              break;
            case "+":
              this.lhs = this.firstInput + this.secondInput / this.thirdInput;
              break;
        }
            if(this.lhs == this.rhs){ 
              this.notifier.notify("success","Question "+this.question_no + " is Correct Answer");
                this.service.l4_score++;
                this.service.totanswers.push(1);
                this.l4_score = this.service.l4_score;
                // this.service.showAlert("Correct Answer! Click OK For Next Question");
                //this.removeChar(1);
                //this.getRhs();
              }
              this.clearTimer();
              this.clearCountDown();
              //else{
                //this.notifier.notify("error","Question "+this.question_no + " is Incorrect Answer!");
                // this.service.showAlert("Incorrect Answer! Click OK For Next Question");
                this.removeChar(1);
               // this.getRhs();
             // }
          
             this.service.changeCompo('Timer');
      }
      getOperator(){
        var operator = [{sign: "-"},{sign: "*"},{sign: "/"},{sign:"+"}];
        var selectedOperator1 = Math.floor(Math.random()*operator.length);
        this.operator1=operator[selectedOperator1].sign;
        if(this.operator1 == "-"){
          this.operator2='/';
        }else if(this.operator1 == "*"){
          this.operator2='-';
        }else if(this.operator1 == "/"){
          this.operator2='-';
        }else if(this.operator1 == "+"){
          this.operator2='/';
        }
      }
      showTimmer(){
        var countDownId = window.setInterval(() => {
          this.timmer -= 1;
          this.timmer=this.timmer;
          if ((this.timmer).toFixed(1) == '0.0') {
            this.showQuestion=true;
            clearInterval(countDownId);
            this.getRhs();
            this.countDown();
          } 
        }, 1000);
        this.showQuestion=false;
      }  
}
