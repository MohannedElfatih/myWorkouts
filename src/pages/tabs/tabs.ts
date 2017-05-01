import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { AddWorkoutPage } from '../add-workout/add-workout';
import { WorkoutPage } from '../workout/workout';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WorkoutPage;
  tab2Root = AddWorkoutPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
