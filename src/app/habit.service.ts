import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
export class HabitService {
  habits = [
    {
      id: 1,
      title: 'Send AM Check-in'
    },
    {
      id: 2,
      title: 'Do daily training'
    },
    {
      id: 3,
      title: 'Take lunch'
    },
    {
      id: 4,
      title: 'Review code'
    },
    {
      id: 5,
      title: 'Send Done List'
    }
  ]
  constructor() { }

  // RXJS Observables
  getHabits(): Observable<any> {
    return of(this.habits);
  }

  addHabit(newHabit) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }
}
