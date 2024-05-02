import { Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {EventListComponent} from "./pages/event-list/event-list.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {RegisterComponent} from "./authPage/register/register.component";
import {LoginComponent} from "./authPage/login/login.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {BookingComponent} from "./pages/booking/booking.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: MainComponent},
  { path: 'event', component: EventListComponent},
  { path: 'event/:id', component: DetailComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '**', component: NotFoundComponent }
];
