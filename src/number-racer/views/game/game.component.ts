import {
  Component,
  OnInit,
  ElementRef,
  ViewChildren,
  QueryList,
  HostListener,
} from '@angular/core';
import { MainService } from '../../main.service';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
}
@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(private service: MainService) {}
  @HostListener('window:keyup', ['$event']) w(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.onClick('right');
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.onClick('left');
    }
  }

  eventText = '';
  level = this.service.level;
  pointer = 2;
  btnhide = false;
  // seconds = 2000000000000000000;
  seconds = 20;
  intervalId: number = 0;
  arr = [];
  arr2 = [];
  movingnumber = '';
  xaxis = 1;
  yaxis = this.service.noofdigits + 1;
  sum = 0;
  ngOnInit() {
    this.sum =
      Math.floor(Math.random() * this.service.rangeend) +
      this.service.rangestart;

    var b =
      Math.floor(Math.random() * (this.sum - 1)) + this.service.rangestart;
    if (this.service.level > 5)
      b =
        Math.floor(Math.random() * this.service.rangeend) +
        this.service.rangestart;
    for (var i = 0; i < this.service.noofdigits; i++) {
      var g =
        Math.floor(Math.random() * this.service.rangeend) +
        this.service.rangestart;
      if (this.service.level > 5)
        b =
          Math.floor(Math.random() * this.service.rangeend) -
          this.service.rangestart;
      this.arr.push(g);
    }
    const a = this.sum - b;

    const rindex = Math.floor(Math.random() * this.arr.length) + 0;
    this.arr[rindex] = a;
    const rindex2 = Math.floor(Math.random() * this.arr.length) + 0;
    this.arr[rindex2] = b;

    this.movingDown();
  }
  movingDown() {
    var _this = this;
    var j = 0;

    var refreshId = setInterval(function () {
      _this.xaxis = 1;
      _this.yaxis = 0;
      _this.xaxis = Math.floor(Math.random() * 4) + 1;
      //console.log('xaxis'+_this.xaxis);
      if (j > _this.service.noofdigits - 1) {
        clearInterval(refreshId);
        var ans = 0;
        for (var k = 0; k < _this.arr2.length; k++) ans = ans + _this.arr2[k];
        if (_this.sum == ans) {
          _this.service.textMaker('You Win');
          _this.service.score++;
          _this.service.totanswers.push(1);
        } else {
          _this.service.textMaker('You Lose');
        }
        // _this.routers.navigate(['/timer'],{ skipLocationChange: true });
        _this.service.changeCompo('Timer');
      }
      _this.movingnumber = _this.arr[j];
      _this.arr[j] = '';
      //console.log('j'+j);
      j++;
      myLoop();
    }, _this.service.secperlevel);

    function myLoop(): void {
      setTimeout(function () {
        _this.yaxis++;
        //console.log('yaxis'+_this.yaxis);
        if (_this.yaxis < _this.service.noofdigits) {
          myLoop();
        } else {
          if (_this.xaxis == _this.pointer) _this.arr2.push(_this.movingnumber);
        }
      }, _this.service.secperdigit);
    }
  }

  counter(i: number) {
    return new Array(i);
  }

  onClick(dir: string) {
    //console.log(event);
    if (dir == 'left') {
      if (this.pointer != 1) {
        this.pointer--;
      }
    } else {
      if (this.pointer != 4) {
        this.pointer++;
      }
    }
  }
}
