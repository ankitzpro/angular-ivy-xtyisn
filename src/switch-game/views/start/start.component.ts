import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../../switch.service';

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  stepOne: boolean = false;

  constructor(
    public service: SwitchService // public formBuilder: FormBuilder
  ) {}
  //public myForm : FormGroup;
  submitted = false;

  ngOnInit() {
    //this.createForm();
  }
  //get f() { return this.myForm.controls; }

  // createForm(){
  //   this.myForm  = this.formBuilder.group({
  //    email: ['']
  //  });
  //  }

  // onSubmit() {
  //   this.submitted = true;

  //   this.service.changeCompo('Timer');
  // }

  onSubmit() {
    this.stepOne = false;
    this.service.changeCompo('Timer');
  }
  goToFirstStep() {
    this.stepOne = true;
  }
}
