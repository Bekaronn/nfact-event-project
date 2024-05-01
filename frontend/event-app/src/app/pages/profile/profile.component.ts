import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProfileService} from "../../services/profile.service";
import {Profile} from "../../model/profile.model";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  profile_picture = '';
  bio = ''

  constructor(protected userService: UserService, private router: Router, private profileService: ProfileService) {
  }

  ngOnInit(): void {
    if (!this.userService.isAuthenticated()) {
      this.router.navigate(['/login']);
    } else {
      this.profileService.getProfile()
        .subscribe((data: Profile) => {
          this.profile = data;
          this.bio = this.profile.bio
          this.profile_picture = this.profile.profile_picture
        });
    }
  }

  submitUpdateProfile(){
    this.profileService.updateProfile(this.profile_picture, this.bio).subscribe(
      response => {
        console.log('User successfully updated:', response);
      },
      error => {
        console.error('Error during update:', error);
      }
    );
  }
}
