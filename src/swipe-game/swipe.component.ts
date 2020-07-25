import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  HostListener,
} from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  DOWN_ARROW = 40,
}

@Component({
  selector: 'link-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss'],
})
export class SwipeComponent implements OnInit {
  @Input() gameData: any;
  parentSubject: Subject<string> = new Subject();

  eventText = '';
  btnhide = false;
  data: any;
  composh: any;
  sub: Subscription;
  constructor(private serv: MyserviceService) {}
  @HostListener('window:keyup', ['$event']) w(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      if (this.serv.pageno == 1 || this.serv.pageno == 2)
        this.clickOrswipe('left');
      else this.clickOrswipe('right');
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      if (this.serv.pageno == 1 || this.serv.pageno == 2)
        this.clickOrswipe('right');
      else this.clickOrswipe('left');
    }

    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      this.clickOrswipe('down');
    }
  }
  ngOnInit() {
    this.sub = this.serv.compoShow$.subscribe(
      (compoShow) => (this.composh = compoShow)
    );
    this.serv.readData();
  }
  onSwipe(evt) {
    this.parentSubject.next('');
    const x =
      Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left') : '';
    const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';

    var event = x == '' ? y : x;
    this.clickOrswipe(event);
  }
  clickOrswipe(evt) {
    this.eventText = evt;
    var page = this.serv.pageno;

    if (this.eventText == 'left' && page == 1) {
      this.serv.changetext();
      // this.routers.navigate(['/two'],{ skipLocationChange: true });
      this.serv.compoChange('Two');
    }

    if (this.eventText == 'left' && page == 2) {
      this.serv.question();
      //this.routers.navigate(['/question'],{ skipLocationChange: true });
      this.serv.compoChange('Timer');
    }
    if (page > 2 && page <= 17 && this.eventText != 'up') {
      this.parentSubject.next('swipe' + this.eventText);
      this.serv.getAnswer(this.eventText);
      this.serv.clearTimer();

      setTimeout(() => {
        this.serv.compoChange('Timer');
      }, 500);
    }
  }
}
