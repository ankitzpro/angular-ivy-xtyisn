import { Component, OnInit } from '@angular/core';
import { BalloonService} from '../../balloon.service';


export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}
@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: [ './game.component.scss' ],
})

export class GameComponent implements OnInit {
  constructor(private service:BalloonService ) { }


  eventText = '';
  level=this.service.level+1;
  randomno:number;
  randomcolor='';
  colorsarray=['red','blue','green'];
  localscore=0;
  wid=20;
  boomhide=false;
  btnshow=false;
    ngOnInit() {

   this.randomno= Math.floor(Math.random() * 200) + 10 ;
   this.service.totpoints=this.service.totpoints+this.randomno;
    var r = Math.floor(Math.random() * 2) + 0 ;
      this.randomcolor=this.colorsarray[r];
  }

  pump(number){

    this.wid=this.wid + (+number);
    this.localscore=this.localscore+(+number);
    if((+this.localscore)>this.randomno){
      this.service.scorecalc(0);
      this.btnshow=true;
      this.boomhide=true;
       setInterval(() => {
        this.localscore-=1;
        if(this.localscore==0){
        this.service.level=this.service.level+1;
      this.service.changeCompo('Timer');
        }
      }, 10);
    }
  }

  collect(){
    this.service.scorecalc(this.localscore);
    this.service.level=this.service.level+1;
    this.service.changeCompo('Timer');
  }
}