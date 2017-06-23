/**
 * Created by danawacomputer on 2017-06-23.
 */
import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
;

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }

  getHero(id: number): Hero {
    return this.getHeroes().find(hero => hero.id === id); //hero.id===id인 hero 객체를 돌려준다.
    //find는 조건에 맞는 '최초의' 객체를 return 해준다.
  }
}
