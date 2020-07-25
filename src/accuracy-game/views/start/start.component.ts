import { Component, OnInit } from '@angular/core';
import { AccuracyService } from '../../accuracy.service';

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  stepOne: boolean = false;
  constructor(
    public service: AccuracyService
  ) // public formBuilder: FormBuilder
  {}
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
  //   // if (this.myForm.invalid) {
  //   //       return;
  //   //     }

  //   //     var formData=this.myForm.value;
  //   //this.routers.navigate(['/game'],{ skipLocationChange: true });

  //   this.service.changeCompo('Game');
  // }
  onSubmit() {
    this.stepOne = false;
    this.service.changeCompo('Timer');
  }
  goToFirstStep() {
    this.stepOne = true;
  }
}
