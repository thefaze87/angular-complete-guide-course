import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>Habits</h2>
    <form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
      <input type="text" placeholder="Add habit"  formControlName="title" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <app-habit-item 
        *ngFor="let habit of habits" 
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
export class HabitListComponent {

  habitForm;

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
  constructor(private formBuilder: FormBuilder) {
    this.habitForm = this.formBuilder.group({
      title: '',
    });
  }

  onSubmit(newHabit) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
    this.habitForm.reset();
  }

}
