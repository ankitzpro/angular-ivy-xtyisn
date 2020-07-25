import { Component, OnInit } from '@angular/core';
import { MyserviceService} from '../../myservice.service';
@Component({
  selector: 'finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
})
export class FinishComponent implements OnInit {

  constructor(private service: MyserviceService) { }
finscore=this.service.score;;

  ngOnInit() {
  }

  reload(){
    window.location.reload();
  }
}
