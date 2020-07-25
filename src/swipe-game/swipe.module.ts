import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import * as Hammer from 'hammerjs';
import { CommonModule } from '@angular/common';
//import { HammerGestureConfig, HAMMER_GESTURE_CONFIG,HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SwipeComponent } from './swipe.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { BlankComponent } from './views/blank/blank.component';
import { OneComponent } from './views/one/one.component';
import { TwoComponent } from './views/two/two.component';
import { QuestionComponent } from './views/question/question.component';
import { TimerComponent } from './views/timer/timer.component';
import { FinishComponent } from './views/finish/finish.component';
// export class MyHammerConfig extends HammerGestureConfig {
//   overrides = <any> {
//     swipe: { direction: Hammer.DIRECTION_ALL },
//   };
// }

@NgModule({
  imports:      [  FormsModule,BrowserAnimationsModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,AngularFirestoreModule,CommonModule
    //,HammerModule
  ],
  declarations: [ SwipeComponent,BlankComponent,
    OneComponent
     ,TwoComponent,QuestionComponent,TimerComponent,FinishComponent ],
  bootstrap:    [ SwipeComponent ],
  providers: [
    // {
    //   provide: HAMMER_GESTURE_CONFIG,
    //   useClass: MyHammerConfig,
    // },
  ],
  exports: [SwipeComponent],
})
export class SwipeModule {}
