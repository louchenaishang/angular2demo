import {Component, OnInit} from '@angular/core';

import {Hero} from '../../models/hero.model';
import {Todo} from "../../models/todo.model";
import {HeroService} from "../../services/hero.service";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-first',
  templateUrl: 'first.component.html',
  styleUrls: ['first.component.css'],
  providers: [HeroService, TodoService]
})

export class FirstComponent implements OnInit {

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
