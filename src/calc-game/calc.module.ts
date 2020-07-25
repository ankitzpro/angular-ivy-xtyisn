import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcComponent } from './calc.component';
import { LevelOneComponent } from './level-one/level-one.component';
import { LevelTwoComponent } from './level-two/level-two.component';
import { LevelThreeComponent } from './level-three/level-three.component';
import { LevelFourComponent } from './level-four/level-four.component';
import { StartComponent } from './start/start.component';
import { TimerComponent } from './timer/timer.component';
import { FinishComponent } from './finish/finish.component';
import {ProgressBarModule} from "angular-progress-bar"
import { NotifierModule } from "angular-notifier";
import { Step1Component } from './step1/step1.component';
@NgModule({
  declarations: [
    CalcComponent,
    LevelOneComponent,
    LevelTwoComponent,
    LevelThreeComponent,
    LevelFourComponent,
    StartComponent,
    TimerComponent,
    FinishComponent,
    Step1Component
  ],
  imports: [
    BrowserModule,
    ProgressBarModule,
    CommonModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          /**
           * Defines the horizontal position on the screen
           * @type {'left' | 'middle' | 'right'}
           */
          position: 'right'
        },
        vertical: {
          /**
           * Defines the horizontal position on the screen
           * @type {'left' | 'middle' | 'right'}
           */
          position: 'top'
        }
      }
    })
  ],
  providers: [],
  bootstrap: [CalcComponent],
  exports:[CalcComponent]
})
export class CalcModule { }
