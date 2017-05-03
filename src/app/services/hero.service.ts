import { Injectable } from '@angular/core';
import {HEROES} from '../mock/mock-heroes'

@Injectable()
export class HeroService {

  getHeroes() {
    return Promise.resolve(HEROES);
  }

}
