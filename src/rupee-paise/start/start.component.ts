import { Component, OnInit } from '@angular/core';
import { RupeePaiseService } from '../rupee-paise.service';
@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  stepOne: boolean = false;
  constructor(private service: RupeePaiseService) {}

  ngOnInit() {}
  submit() {
    this.service.changeCompo('Level1');
  }

  onSubmit() {
    this.stepOne = false;
    // this.service.changeCompo('Timer');
  }
  goToFirstStep() {
    this.stepOne = true;
  }
}
