import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Todo } from '../interfaces/todo';
import { Task } from '../classes/taks';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  url = '/assets/todo.json';
  constructor(private http: HttpClient) { }

  getData(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url).pipe(pluck('todoList'));
  }

  // postData(value: string, taks: Ta) {
  //   return this.http.post(this.url, value);
  // }
}
