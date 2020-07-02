import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Task } from '../classes/taks';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getData(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url + 'todoList');
  }

  postTask(task: Task) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(task);

    return this.http.post(this.url + 'todoList', body);
  }

  deleteTask(id: any): Observable<any> {
    const endpoint = 'todoList/';

    return this.http.delete(this.url + endpoint + id);
  }

  editTask(id: any, task: Task) {
    let endpoint = `todoList/${id}`;

    return this.http.put(this.url + endpoint, task);
  }
}
