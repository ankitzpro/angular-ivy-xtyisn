import { Component, OnInit } from '@angular/core';
import { MyserviceService} from '../../myservice.service'

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent implements OnInit {

  constructor(private serv: MyserviceService) { }
text:String;
  ngOnInit() {
this.text=this.serv.text;
this.serv.pageno=2;
  }

}
