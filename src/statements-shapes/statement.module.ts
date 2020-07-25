import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatementComponent } from './statement.component';
import { StartComponent } from './start/start.component';
import { LevelOneComponent } from './level-one/level-one.component';
import { LevelTwoComponent } from './level-two/level-two.component';
import { LevelThreeComponent } from './level-three/level-three.component';
import { FinishComponent } from './finish/finish.component';
import { TimerComponent } from './timer/timer.component';
import { NotifierModule } from "angular-notifier";
import { Step1Component } from './step1/step1.component';

@NgModule({
  declarations: [
    StatementComponent,
    StartComponent,
    LevelOneComponent,
    LevelTwoComponent,
    FinishComponent,
    TimerComponent,
    LevelThreeComponent,
    Step1Component
  ],
  imports: [
    BrowserModule,
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
           * @type {'top' | 'middle' | 'bottom'}
           */
          position: 'top'
        }
        
      },
      behaviour: {
 
        /**
         * Defines whether each notification will hide itself automatically after a timeout passes
         * @type {number | false}
         */
        autoHide: 1000,
       
        /**
         * Defines what happens when someone clicks on a notification
         * @type {'hide' | false}
         */
        onClick: false,
       
        /**
         * Defines what happens when someone hovers over a notification
         * @type {'pauseAutoHide' | 'resetAutoHide' | false}
         */
        onMouseover: 'pauseAutoHide',
       
        /**
         * Defines whether the dismiss button is visible or not
         * @type {boolean} 
         */
        showDismissButton: true,
       
        /**
         * Defines whether multiple notification will be stacked, and how high the stack limit is
         * @type {number | false}
         */
        stacking: 2
       
      }
      
    })
  ],
  providers: [],
  bootstrap: [StatementComponent],
  exports:[StatementComponent]
})
export class StatementModule { }
