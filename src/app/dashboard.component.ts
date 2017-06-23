/**
 * Created by danawacomputer on 2017-06-23.
 */
import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  heroes: Hero[];

  constructor(private heroService: HeroService) {}  //호출

  ngOnInit(): void {                                //초기화
    this.heroes = this.heroService.getHeroes().slice(1, 5);
  }
}
