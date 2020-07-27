import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuessWhatComponent } from './guess-what.component';
import { StartComponent } from './views/start/start.component';
import { FinishComponent } from './views/finish/finish.component';
import { BrowserModule } from '@angular/platform-browser';
import { GameComponent } from './views/game/game.component';
import { TimerComponent } from './views/timer/timer.component';



@NgModule({
  declarations: [
    GuessWhatComponent,
    StartComponent,
    FinishComponent,
    GameComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [GuessWhatComponent],
  exports:[GuessWhatComponent]
})
export class GuessWhatModule { }
