import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { MemcardsComponent } from './memcards.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { StartComponent } from './views/start/start.component';
import { CardsComponent } from './views/cards/cards.component';
import { TimerComponent } from './views/timer/timer.component';
import { FinishComponent } from './views/finish/finish.component';
import { Step1Component } from './views/step1/step1.component';



@NgModule({
  imports:      [  FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule ],
  declarations: [ MemcardsComponent , 
    StartComponent,
    CardsComponent
    ,TimerComponent,FinishComponent, Step1Component],
  bootstrap:    [ MemcardsComponent ],
  exports:      [ MemcardsComponent ]
  
})
export class MemcardsModule { }