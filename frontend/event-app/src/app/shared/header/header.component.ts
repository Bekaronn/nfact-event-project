import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {UserService} from "../../services/user.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  constructor(protected userService: UserService) {
  }
  logout(): void {
    this.userService.logout();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
}
