import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

   link = 'https://http://localhost:8080/';

  constructor(private _http: HttpClient) {}







 /* send(content: string): Observable<Message> {
    console.log(`${this.link}/send?content=${content}`);
    return this._http.put<Message>(`${this.link}/send?text=${content}`, '');
  }

  read_all(): Observable<Message[]> {
    return this._http.get<Message[]>(`${this.link}/read_all`);
  }

//getmessages(): Observable<Message> {
    // Make an HTTP GET request to retrieve the user's information
   // return this.http.get<Message>(`${this.link}/1`);
  //}

  
*/
}

