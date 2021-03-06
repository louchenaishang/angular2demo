import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {HttpService} from './http.service'
import 'rxjs/add/operator/toPromise';


import {Todo} from "../models/todo.model";

@Injectable()
export class TodoService {

  constructor(private http: Http,private httpService: HttpService) {
  }

  public loadTodoListWithWrapper(): Promise<Todo[]> {
    return this.httpService.get('/assets/mock/todo-list.json')
      .toPromise()
      .then(response => response.json() as Todo[])
      .catch(this.handleError);
  }

  public loadTodoList(): Promise<Todo[]> {
    return this.http.get('/assets/mock/todo-list.json')
      .toPromise()
      .then(response => response.json() as Todo[])
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
