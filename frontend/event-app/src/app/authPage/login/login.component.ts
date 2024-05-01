import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  onSubmit() {
      this.userService.login(this.username, this.password).subscribe(
        response => {
          console.log('User login successfully:', response);
          const token = response.token;
          this.userService.saveToken(token);
          this.router.navigate(['/profile']);
        },
        error => {
          console.error('Error during login:', error);
        }
      );
  }
}
