import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-habit-form',
  template: `
    <form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
      <input type="text" placeholder="Add habit" formControlName="title" />
      <button type="submit">Add</button>
    </form>
  `,
  styles: [
    `
    button {
      background-color: blue;
      border-radius:4px;
      color: white;
      font-size: 14px;
      border: none;
      outline: none;
    }
    `
  ]
})
export class HabitFormComponent implements OnInit {

  habitForm: any;
  @Output() addHabit = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.habitForm = formBuilder.group({
      title: ''
    });
   }

  ngOnInit(): void {}

  onSubmit(newHabit) {
    this.addHabit.emit(newHabit);
    this.habitForm.reset();
  }

}
