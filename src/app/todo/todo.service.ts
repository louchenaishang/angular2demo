import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';


import {Todo} from "./todo.model";

@Injectable()
export class TodoService {

  constructor(private http: Http) {
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
