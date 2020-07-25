import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { BalloonService } from '../../balloon.service';

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  stepOne: boolean = false;
  constructor(private service: BalloonService) {}
  submitted = false;

  ngOnInit() {}

  // onSubmit() {
  //   // this.routers.navigate(['/game'],{ skipLocationChange: true });
  //   this.service.changeCompo('Game');
  //   this.service.countDown();
  // }

  onSubmit() {
    this.stepOne = false;
    // this.service.changeCompo('Timer');
    this.service.changeCompo('Game');
    this.service.countDown();
  }
  goToFirstStep() {
    this.stepOne = true;
  }
}
