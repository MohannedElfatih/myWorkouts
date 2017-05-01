import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkoutPage } from '../workout/workout';
import { WorkoutService } from '../../providers/workout.service';

@Component({
  selector: 'page-add',
  templateUrl: 'add-workout.html',
  providers: [WorkoutService]
})
export class AddWorkoutPage {
  title: String;
  note: String;
  type: String;
  constructor(public navCtrl: NavController, private _workoutService: WorkoutService) {

  }

  onSubmit(){
    console.log("Submitted");
    var workout = {
      title: this.title,
      note: this.note,
      type: this.type
    }

    this._workoutService.addWorkout(workout).subscribe(data =>{
      
    }, err => {
      console.log(err);
    }, () =>{
      console.log("Workout Added");
      
    });

    this.navCtrl.setRoot(WorkoutPage)
  }
}
