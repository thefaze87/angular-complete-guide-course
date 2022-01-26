import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { HabitDetailComponent } from './habit-detail/habit-detail.component';
import { HabitItemComponent } from './habit-item/habit-item.component';
import { HabitFormComponent } from './habit-form/habit-form.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { MyhabitsComponent } from './myhabits/myhabits.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'site', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  {
    path: 'account/:id',
    component: AccountDetailComponent,
    children: [
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
  { path: 'habits', component: MyhabitsComponent },
  {path: '', redirectTo: '/site', pathMatch: 'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HabitListComponent,
    HabitDetailComponent,
    HabitItemComponent,
    HabitFormComponent,
    HomeComponent,
    AccountComponent,
    MyhabitsComponent,
    AccountDetailComponent,
    ProfileComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
