import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutService } from '../../providers/workout.service';
import { WorkoutDetailsPage } from '../workout-details/workout-details';

@Component({
  selector: 'page-workout',
  templateUrl: 'workout.html',
  providers: [WorkoutService]
})
export class WorkoutPage {
  workouts;

  constructor(private navController: NavController, 
  private workoutService: WorkoutService,
  private navParams: NavParams) {
    this.workoutService.getWorkouts().subscribe(workouts =>{
      console.log(workouts);
      this.workouts = workouts;
    });
  }

  /*ngOnInit(){
    this.workoutService.getWorkouts().subscribe(workouts =>{
      console.log(workouts);
      this.workouts = workouts;
    });
  }*/

  workoutSelected(event, workout){
    this.navController.push(WorkoutDetailsPage, {
      workout: workout
    });
    
  }
}
