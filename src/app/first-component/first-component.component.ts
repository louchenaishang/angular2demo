import {Component, OnInit} from '@angular/core';
import {Hero} from '../class/hero';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent {

  submitted=false;

  hero = {};

  other = new Hero('2','aaa');

  heroes = [new Hero('1', 'louchen1'),new Hero('1', 'louchen2'),new Hero('1', 'louchen3')];


  get heroJson() { return JSON.stringify(this.hero);}
  get otherJson() { return JSON.stringify(this.other);}


  onSubmit() {
    this.hero = new Hero(this.other.age,this.other.name);
    this.submitted=true;

  }

}
