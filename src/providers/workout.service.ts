import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the Test provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WorkoutService {
  workoutsUrl: String;
  apiKey: string;

  constructor(public http: Http) {
    console.log("Service Connected");
    this.apiKey = "INSERT API HERE";
    this.workoutsUrl = "https://api.mlab.com/api/1/databases/mean-authentication/collections/workouts";
  }

  getWorkouts() {
    return this.http.get(this.workoutsUrl + "?apiKey=" + this.apiKey)
      .map(res => res.json());
  }

  addWorkout(workout){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.workoutsUrl + '?apiKey=' + this.apiKey,
     JSON.stringify(workout), {headers: headers})
     .map(res => res.json());
  }

  deleteWorkout(workoutId){
    return this.http.delete(this.workoutsUrl + "/" + workoutId +'?apiKey=' + this.apiKey)
     .map(res => res.json());
  }
}