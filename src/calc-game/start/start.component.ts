import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';
@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  stepOne: boolean = false;
  constructor(private service: CalcService) {}

  ngOnInit() {}
  submit() {
    this.service.changeCompo('Timer');
  }

  onSubmit() {
    this.stepOne = false;
    // this.service.changeCompo('Timer');
  }
  goToFirstStep() {
    this.stepOne = true;
  }
}
