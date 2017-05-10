import {Component, OnInit} from '@angular/core';

import {Hero} from '../../models/hero.model';
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-first',
  templateUrl: 'first.component.html',
  styleUrls: ['first.component.css'],
  providers: [HeroService]
})

export class FirstComponent implements OnInit {

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  submitted = false;

  hero:Hero = null;

  other:Hero= new Hero('2', 'aaa');

  heroes: Hero[] = [];

  onSubmit() {
    this.hero = new Hero(this.other.age, this.other.name);
    this.submitted = true;

  }

}
