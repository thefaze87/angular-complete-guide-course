import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <nav>
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/account">Account</a></li>
      <li><a routerLink="/habits">My Habit Tracker</a></li>
    </ul>
  </nav>
   <!-- Used to route --> 
   <router-outlet></router-outlet>
   
  `,
  styles: []
})
export class AppComponent {
  title = 'My Angular Site';
}
