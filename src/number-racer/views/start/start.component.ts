

import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { MainService } from '../../main.service'



@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: [ './start.component.scss' ],
})
export class StartComponent implements OnInit {

  stepOne:boolean=false;
  stepTwo:boolean=false;
  constructor(private service: MainService){
  }
    submitted = false;

  ngOnInit() {
  }



   onSubmit(){
      this.stepOne=false;
      this.stepTwo=false;
       // this.routers.navigate(['/game'],{ skipLocationChange: true });
       this.service.changeCompo('Timer');
   }
   goToFirstStep(){
    this.stepOne=true;
   }
   goToSecondStep(){
    this.stepOne=false;
    this.stepTwo=true;
   }

}


