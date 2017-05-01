import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutPage } from '../workout/workout';
import { WorkoutService } from '../../providers/workout.service';

@Component({
  selector: 'page-workout-details',
  templateUrl: 'workout-details.html',
  providers: [WorkoutService]
})
export class WorkoutDetailsPage {
  workout: any;

  constructor(public navController: NavController,
   public navParams: NavParams,
   private _workoutService: WorkoutService) {
    this.workout = this.navParams.get("workout");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutDetails');
  }

  deleteWorkout(workoutId){
    this._workoutService.deleteWorkout(workoutId).subscribe(data =>{
      
    }, err => {
      console.log(err);
    }, () =>{
      console.log("Workout Deleted");
    });
    
    this.navController.setRoot(WorkoutPage);
  }
}
