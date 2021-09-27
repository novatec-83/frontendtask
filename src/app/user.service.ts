import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// const baseURL = "https://614caf3b3c438c00179faaf8.mockapi.io";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL = environment.url;
  private messageSource = new BehaviorSubject<string>('service');
  currentMessage = this.messageSource.asObservable();
  constructor(private httpClient:HttpClient) { }
  
  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  readAll(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/contacts`);
  }
  read(id: any): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/contacts/${id}`);
  }
}
