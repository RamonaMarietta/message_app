import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  link = 'https://http://localhost:8080/';
  

  constructor(private http: HttpClient) {}

  /*send(text: string): Observable<User> {
    console.log(`${this.link}/send?text=${text}`);
    return this.http.put<User>(`${this.link}/send?text=${text}`, '');
  }

  read_all(): Observable<User[]> {
    return this.http.get<User[]>(`${this.link}/read_all`);
  }

/*getUser(): Observable<User> {
    // Make an HTTP GET request to retrieve the user's information
    return this.http.get<User>(`${this.link}/users/${id}`);
  }

  updateUser(userId: number, ): Observable<User> {
    // Make an HTTP PUT request to update the user's information
    return this.http.put<User>(`${this.link}/users/${user.id}`, user);
  }

}

 
*/
}