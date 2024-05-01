import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient, private userService: UserService) { }

  getProfile(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `token ${this.userService.getToken()}`
    });
    return this.http.get("http://localhost:8000/api/profile/", { headers: headers });
  }

  updateProfile(profile_picture: string, bio: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `token ${this.userService.getToken()}`
    });
    return this.http.put("http://localhost:8000/api/profile/", {bio}, { headers: headers });
  }
}
