import { Component, OnInit } from '@angular/core';
import { GuessWhatService } from 'src/guess-what/guess-what.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  meaning: string;
  Correct_Word: string;
  letters: any;
  text: string = 'Filling The Blanks';
  showQuestion: boolean = true;
  startCountDown: number = 5;
  userAnswer: any = [];
  level=1;
  quesNo:number=1;
  maxNoOfque=4;
  timerCountDown:number=15;
  level1Que = [{ meaning: 'The Highest Point', letters: 'ZNENIFTH', Correct_Word: 'zenith' },
  { meaning: 'get someone to do something through promises', letters: 'ENDTCITE', Correct_Word: 'entice' },
  { meaning: 'hinder or prevent', letters: 'THDWAMRT', Correct_Word: 'thwart' },
  { meaning: 'a charateristic language of a particular group', letters: 'JNARGCON', Correct_Word: 'jargon' },
  ];
  level2Que = [{ meaning: 'a state of affairs', letters: 'SITUGVATIONN', Correct_Word: 'situation' },
  { meaning: 'a company or person that prepares and issues books', letters: 'PMUBWLISJHER', Correct_Word: 'publisher' },
  { meaning: 'take to pieces', letters: 'RDINSMEANTLE', Correct_Word: 'dismantle' },
  { meaning: 'requiring considerable time and effort', letters: 'ALABODRICOUS', Correct_Word: 'laborious' },
  ];
  level3Que = [{ meaning: 'developed to a high degree of complexity', letters: 'DSORPHISTICVATED', Correct_Word: 'sophisticated' },
  { meaning: 'greatly surprised or impressed', letters: 'MABSTCONISHED', Correct_Word: 'astonished' },
  { meaning: 'group of people organized for a joint purpose', letters: 'MASBLSOCIATION', Correct_Word: 'association' },
  { meaning: 'achieve or complete successfully', letters: 'BACMCNOMPDLISH', Correct_Word: 'accomplish' },
  ];
  maintainStack: any = [];
  correctArray: string[];
  seconds: number=15;
  intervalId: any;
  timerDownId: any;

  constructor(private service: GuessWhatService) { }

  ngOnInit(): void {
    this.countDown();
    // this.getQuestion();
  }
  private countDown() {
    this.showQuestion = false;
    this.startCountDown = 5;
    const countDownId = window.setInterval(() => {
      this.startCountDown -= 1;
      this.startCountDown = this.startCountDown;
      if ((this.startCountDown).toFixed(1) == '0.0') {
        this.showQuestion = true;
        clearInterval(countDownId);
        this.getQuestion();
        // this.service.showAlert("satrt");
      }
    }, 1000);
  }

  getQuestion() {
    this.clearTimer();
    switch(this.quesNo) {
      case 5:
          this.level++;
          break;
      case 9:
        this.level++;
        break;
      case 13:
        alert("game is over");
        // this.service.compoChange('Two');
        alert("finish");
        break;
      }
        if(this.level == 1){
            var random = Math.floor(Math.random() * this.level1Que.length);
            this.meaning = this.level1Que[random].meaning;
            var letter = this.shuffelWord(this.level1Que[random].letters)
            this.letters = letter.split('');
            this.service.customConsole(this.letters);
            this.Correct_Word = this.level1Que[random].Correct_Word;
            this.correctArray = this.Correct_Word.split('');
            this.level1Que.splice(random, 1);
        }else if(this.level == 2){
          var random = Math.floor(Math.random() * this.level2Que.length);
          this.meaning = this.level2Que[random].meaning;
          var letter = this.shuffelWord(this.level2Que[random].letters)
          this.letters = letter.split('');
          this.service.customConsole(this.letters);
          this.Correct_Word = this.level2Que[random].Correct_Word;
          this.correctArray = this.Correct_Word.split('');
          this.level2Que.splice(random, 1);
      }else if(this.level == 3){
        var random = Math.floor(Math.random() * this.level3Que.length);
        this.meaning = this.level3Que[random].meaning;
        var letter = this.shuffelWord(this.level3Que[random].letters)
        this.letters = letter.split('');
        this.service.customConsole(this.letters);
        this.Correct_Word = this.level3Que[random].Correct_Word;
        this.correctArray = this.Correct_Word.split('');
        this.level3Que.splice(random, 1);
    }
    this.l1_countDown();
    this.timmer();
  }
  shuffelWord(word) {
    var shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
      shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffledWord;
  }

  public insertInUserAnswer(letter, index) {
    this.service.customConsole('letter: ' + letter, 'index: ' + index);
    if(this.userAnswer.length >= this.correctArray.length) {
        return false;
    }else{
      console.log(this.userAnswer.length ," length " + this.correctArray.length);
    (<HTMLInputElement>document.getElementById(letter + index)).disabled = true;
      this.userAnswer.push(letter);
      this.maintainStack.push(letter + index);
      this.service.customConsole(this.userAnswer,"userInput");
    }

  }


  public removeInUserAnswer() {
    var spliced = (this.userAnswer).pop();
    this.service.customConsole(this.userAnswer);
    // enable checkbox on back
    const lastItem = (this.maintainStack).pop();
    (<HTMLInputElement>document.getElementById(lastItem)).disabled = false;
    (<HTMLInputElement>document.getElementById(lastItem)).checked = false;
  }

  public nextStage() {
    // if(0 < this.quesNo && this.quesNo > 4){
    //   this.level++;
    // }else if(this.quesNo == 8){
    //   this.level++;
    // }else if(this.quesNo == 12){
    //   this.level++;
    // }else if(this.level >= 3){
    //   this.service.showAlert("game is completed !!..");
    // }


    this.maintainStack = [];
    this.userAnswer = [];
    var inputs = document.getElementsByClassName('enableAll');
      for(var i = 0; i < inputs.length; i++) {
        (<HTMLInputElement>inputs[i]).disabled = false;
    }
    if(this.quesNo < 13){
        this.countDown();
    }else{
      this.service.changeCompo("Finish");
    }
    // this.correctArray.map( function (item, index) {
    //   console.log('item: ' + item, 'index: ' + index);
    // (document.getElementsByClassName("enableAll")).disabled = false;
    // (document.getElementsByClassName("enableAll")).checked = false;
    // });
  }

  public onSubmit() {
    this.clearTimer();
    if (this.userAnswer.toString().toLowerCase() === this.correctArray.toString()) {
      if(this.level == 1){
        this.service.level1_score++;
      }else if(this.level == 2){
        this.service.level2_score++;
      }else if(this.level == 3){
        this.service.level3_score++;
      }
      this.quesNo++;
      console.log(this.service.level1_score,this.service.level2_score,this.service.level3_score);
      this.service.showAlert('Correct Answer !!');
      // this.getQuestion()
      this.nextStage()

    } else {
      this.quesNo++;
      this.service.showAlert('Wrong Answer !!');
      // this.getQuestion()
      this.nextStage()

    }

  }
  l1_countDown() {
    this.intervalId = setTimeout(() => {
      this.startCountDown -= 0.1;
            this.quesNo++;
            this.service.customConsole("not Answer !!");
            this.onSubmit();
            this.myfunction();
            this.countDown();
        //     this.seconds=1500;
        // }, 1500000);
            this.seconds=15;
        }, 15000);
      }
  myfunction(){clearInterval(this.timerDownId);}
  private timmer(){
    clearInterval(this.timerDownId);
    this.timerDownId = window.setInterval(() => {
      this.timerCountDown -= 1;
      this.timerCountDown=this.timerCountDown;
      if ((this.timerCountDown).toFixed(1) == '0.0') {
        this.service.customConsole(this.timerCountDown);
        clearInterval(this.timerDownId);
        }
    }, 1000);
    this.timerCountDown = 15;

  }
  clearTimer(){clearTimeout(this.intervalId);}
}
