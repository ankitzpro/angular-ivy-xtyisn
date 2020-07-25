import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccuracyComponent } from './accuracy.component';
import { StartComponent } from './views/start/start.component';
import { GameComponent } from './views/game/game.component';
import { TimerComponent } from './views/timer/timer.component';
import { FinishComponent } from './views/finish/finish.component';
import {  NumberDirective } from '../numonly.directive';
import { NotifierModule } from "angular-notifier";
import { Step1Component } from './views/step1/step1.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ,CommonModule,
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
  declarations: [ AccuracyComponent ,
    StartComponent,
    GameComponent
    ,TimerComponent,NumberDirective,FinishComponent, Step1Component],
  bootstrap:    [ AccuracyComponent ],
  exports:      [AccuracyComponent]
})
export class AccuracyModule { }
