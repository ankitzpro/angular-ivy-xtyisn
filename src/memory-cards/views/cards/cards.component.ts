import {
  Component,
  OnInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { CardService } from '../../card.service';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  constructor(private service: CardService) {}
  level = this.service.level;
  arr = [];
  click = false;
  clicked = 0;
  i = 3;
  seconds = this.service.seconds;
  intervalId: number = 0;
  showstart = false;
  showwait = true;
  showtimer = false;
  @ViewChildren('crd') components: QueryList<ElementRef>;
  ngOnInit() {
    // if (this.service.level < 3) {
    //   this.i = 3;
    // } else if (this.service.level < 6) {
    //   this.i = 5;
    // } else {
    //   this.i = 7;
    // }
    this.i=this.service.noofcards;
    this.randomArray(this.i);
  }

  counter(i: number) {
    return new Array(i);
  }

  public randomArray(i) {
    var _this = this;

    var j = 0;

    function myLoop() {
      setTimeout(function () {
        const a = Math.floor(Math.random() * 29) + 0;
        1;

        _this.arr.push(a);
        _this.components
          .toArray()
          [a].nativeElement.classList.add('btn-secondary');
        setTimeout(() => {
          _this.components
            .toArray()
            [a].nativeElement.classList.remove('btn-secondary');
        }, 1000);
        j++;
        if (j < i) {
          myLoop();
        } else {
          _this.startShow();
        }
      }, 2000);
    }

    myLoop();
  }

  cardClick(index) {
    if (this.click == true && this.clicked < this.i) {
      if (this.arr[this.clicked] == index) {
        for (var j = 0; j < this.components.toArray().length; j++) {
          this.components
            .toArray()
            [j].nativeElement.classList.remove('btn-secondary');
        }
        this.components
          .toArray()
          [index].nativeElement.classList.add('btn-secondary');

      } else {
        this.service.clearTimer();
        this.service.textMaker('Wrong box selected');
        this.service.clearTimer();
        //this.routers.navigate(['/timer'],{ skipLocationChange: true });
        this.service.changeCompo('Timer');
      }
      this.clicked++;
      if (this.clicked == this.i) {
        this.service.score++;
        this.service.totanswers.push(1);
        this.service.textMaker('Level Completed');
        this.service.clearTimer();
        //this.routers.navigate(['/timer'],{ skipLocationChange: true });
        this.service.changeCompo('Timer');
      }
    }
  }
  private countDown(): void {
    this.showstart = false;
    this.showtimer = true;
    this.service.intervalId = window.setInterval(() => {
      this.seconds -= 0.1;
      this.service.seconds=this.seconds;
      if (this.seconds.toFixed(1) === '0.1') {
        this.service.textMaker("You didn't attempted");
        this.service.clearTimer();
        //this.routers.navigate(['/timer'])
        this.service.changeCompo('Timer');
      }
    }, 100);
  }

  startShow() {
    this.click = true;
    this.showwait = false;
    this.showstart = true;
    setTimeout(() => {
      this.countDown();
    // }, 10000000000);
    }, 1000);
  }
}
