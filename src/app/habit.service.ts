import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root'
})
  
export class HabitService {
  habits: Habit[] = [
    {
      id: 1,
      title: 'Send AM Check-in',
      count: 5,
    },
    {
      id: 2,
      title: 'Do daily training',
      count: 4,
    },
    {
      id: 3,
      title: 'Take lunch',
      count: 3,
    },
    {
      id: 4,
      title: 'Review code',
      count: 2,
    },
    {
      id: 5,
      title: 'Send Done List',
      count: 6,
    }
  ]
  constructor() { }

  // RXJS Observables
  getHabits(): Observable<Habit[]> {
    return of(this.habits);
  }

  addHabit(newHabit) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }
}
