import {Component, OnInit} from '@angular/core';

import {Hero} from '../hero/hero.model';
import {Todo} from "../todo/todo.model";
import {HeroService} from "../hero/hero.service";
import {TodoService} from "../todo/todo.service";

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  providers: [HeroService, TodoService]
})

export class FirstComponentComponent implements OnInit {

  constructor(private heroService: HeroService, private todoService: TodoService) {
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);

    this.todoService.loadTodoListWithHeader().then(todoItems => {
      console.log(todoItems)
      this.todoItems = todoItems;
    });

  }

  submitted = false;

  hero:Hero = null;

  other:Hero= new Hero('2', 'aaa');

  heroes: Hero[] = [];

  todoItems: Todo[];

  date:string='';



  onSubmit() {
    this.hero = new Hero(this.other.age, this.other.name);
    this.submitted = true;

  }

}
