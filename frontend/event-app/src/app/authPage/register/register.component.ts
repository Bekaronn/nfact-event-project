import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string;
  password: string;
  email: string;

  constructor(
    private userService: UserService
  ) { }

  onSubmit() {
      this.userService.register(this.username, this.email, this.password).subscribe(
        response => {
          console.log('User registered successfully:', response);
        },
        error => {
          console.error('Error during registration:', error);
        }
      );
  }
}
