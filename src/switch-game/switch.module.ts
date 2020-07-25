import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SwitchComponent } from './switch.component';
import { StartComponent } from './views/start/start.component';
import { GameComponent } from './views/game/game.component';
import { TimerComponent } from './views/timer/timer.component';
import { FinishComponent } from './views/finish/finish.component';
import { Step1Component } from './views/step1/step1.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [
    SwitchComponent,
    StartComponent,
    GameComponent,
    TimerComponent,
    FinishComponent,
    Step1Component,
  ],
  bootstrap: [SwitchComponent],
  exports: [SwitchComponent],
})
export class SwitchModule {}
