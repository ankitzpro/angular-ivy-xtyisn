import { Component } from '@angular/core';
import { SwitchService } from '../../switch.service';

//import { Router} from '@angular/router';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  constructor(private service: SwitchService) //private routers:Router
  {}

  eventText = '';
  level = this.service.level;

  arr = ['fa-play', 'fa-square', 'fa-circle', 'fa-plus'];
  //ansarr=[];
  arr2 = ['fa-play', 'fa-square', 'fa-circle', 'fa-plus'];
  // arr=['triangle','square','circle','cross'];
  // //ansarr=[];
  // arr2=['triangle','square','circle','cross'];
  ansar1 = [];
  ansar2 = [];
  ansar3 = [];
  randpos: number;
  seconds: number = this.service.seconds;
  ngOnInit() {
    this.arr = this.shuffle(this.arr);
    this.arr2 = this.shuffle(this.arr2);

    for (var i = 0; i < this.arr.length; i++) {
      for (var j = 0; j < this.arr2.length; j++) {
        if (this.arr[i] == this.arr2[j]) {
          this.ansar1.push(j + 1);
          this.ansar2.push(j + 1);
          this.ansar3.push(j + 1);
        }
      }
    }

    this.randpos = Math.floor(Math.random() * 3) + 1;

    switch (this.randpos) {
      case 1: {
        this.ansar2 = this.shuffle(this.ansar2);
        this.ansar3 = this.shuffle(this.ansar3);
        break;
      }
      case 2:
        {
          this.ansar1 = this.shuffle(this.ansar1);
          this.ansar3 = this.shuffle(this.ansar3);
        }
        break;
      case 3: {
        this.ansar2 = this.shuffle(this.ansar2);
        this.ansar1 = this.shuffle(this.ansar1);
        break;
      }
    }
    this.countDown();
  }

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  selectAns(ans) {
    this.service.clearTimer();

    if (ans == this.randpos) {
      this.service.scoreCalc('Level Passed \n Correct Answer'); 
      this.service.score++;
      this.service.totanswers.push(1);
      this.service.changeCompo('Timer');
    } else {
      this.service.scoreCalc('Level Lost \n Wrong Answer'); //this.routers.navigate(['/timer'],{ skipLocationChange: true });

      this.service.changeCompo('Timer');
    }
  }

  private countDown(): void {
    this.service.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      this.service.seconds = this.seconds;
      if (this.seconds.toFixed(1) == '0.0') {
        this.service.anstext = "You didn't attempted";
        //this.routers.navigate(['/timer'],{ skipLocationChange: true })

        this.service.changeCompo('Timer');
      }
      //}, 100000000000);
     }, 1000);
  }
}
