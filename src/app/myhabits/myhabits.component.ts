import { Component } from '@angular/core';

@Component({
  selector: 'app-myhabits',
  template: `
   <!-- Used to route --> 
   <!-- <router-outlet></router-outlet> -->
   <div class="container">
    <h1>{{ title }}</h1>
    <app-habit-list></app-habit-list>
   </div>
  `,
  styles: ['h1 { color: purple }']
})
export class MyhabitsComponent {
  title = 'Habit Tracker';
}
