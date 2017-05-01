import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { AddWorkoutPage } from '../pages/add-workout/add-workout';
import { TabsPage } from '../pages/tabs/tabs';
import { WorkoutPage } from '../pages/workout/workout';
import { WorkoutDetailsPage } from '../pages/workout-details/workout-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WorkoutService } from '../providers/workout.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AddWorkoutPage,
    TabsPage,
    WorkoutPage,
    WorkoutDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddWorkoutPage,
    TabsPage,
    WorkoutPage,
    WorkoutDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WorkoutService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
