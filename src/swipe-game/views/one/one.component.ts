import { Component, OnInit } from '@angular/core';
import { MyserviceService} from '../../myservice.service'

@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styleUrls: [ './one.component.scss' ],
})
export class OneComponent implements OnInit {

  constructor(private serv: MyserviceService) { }
text:String;
  ngOnInit() {
this.text=this.serv.text;
this.serv.pageno=1;
  }

  next(){
    this.serv.compoChange('Two');
  }

}
