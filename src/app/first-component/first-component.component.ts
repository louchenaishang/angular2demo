import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero/hero.model';
import {HeroService} from "../hero/hero.service";

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  providers: [ HeroService ]
})

export class FirstComponentComponent implements OnInit{

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  submitted=false;

  hero = {};

  other = new Hero('2','aaa');

  heroes: Hero[] = [];


  onSubmit() {
    this.hero = new Hero(this.other.age,this.other.name);
    this.submitted=true;

  }

}
