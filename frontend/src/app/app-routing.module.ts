import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";


const routes: Routes = [
  {'path': 'login', component: LoginComponent},
  {'path': 'signup', component: SignupComponent},
  {'path': 'leaderboard', component: LeaderboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

