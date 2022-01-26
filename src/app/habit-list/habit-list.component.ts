import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators';
import { HabitService } from '../data/habit.service';
import { Habit } from '../data/habit';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>Habits</h2>
    <app-habit-form (addHabit) = "onAddHabit($event)" ></app-habit-form>
    <ul>
      <app-habit-item 
        *ngFor="let habit of habits | async" 
        [habit]="habit"
      ></app-habit-item>
    </ul>
    <p>
      habit-list works!
    </p>
  `,
  styles: [
  ]
})
export class HabitListComponent implements OnInit {
  habits!: Observable<Habit[]>;

  constructor(private habitService: HabitService) {}

  ngOnInit(): void {
    this.habits = this.habitService.refetch.pipe(
      switchMap(() => this.habitService.getHabits())
    );
  }

  onAddHabit(newHabit: Habit) {
    this.habitService.addHabit(newHabit).subscribe();
  }
}
