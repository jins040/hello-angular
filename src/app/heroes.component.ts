/**
 * Created by danawacomputer on 2017-06-23.
 */
import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}  //생성자의 역할은 Injection을 통한 서비스 주입, 생성자 호출은 따로

  ngOnInit() {  // OnInit implement 해서 사용
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {  //hero의 타입은 Hero(class), return 타입은 void
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
