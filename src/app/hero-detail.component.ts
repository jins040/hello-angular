/**
 * Created by danawacomputer on 2017-06-22.
 */

import {Component, Input, OnInit} from "@angular/core";
import {Hero}                     from './hero';
import {HeroService}              from "./hero.service";
import {ActivatedRoute, Params}   from "@angular/router";
import {Location}                 from '@angular/common';

import 'rxjs/add/operator/switchMap'
import {rxSubscriber} from "rxjs/symbol/rxSubscriber";

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {  //export가 java public 이랑 비슷한 기능
  //@Input()
  hero: Hero;

  selectedId;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  // ngOnInit(): void {
  //   this.route.params
  //     .switchMap(
  //       (params: Params) => this.heroService.getHero(+params['id'])
  //     ).subscribe(hero => this.hero = hero);
  // }

  ngOnInit(): void {  //this.route.params가 parameter를 받는 것, switchMap은 함수를 observable 타입을 받고 Params 객체를 넘겨준다.
                      //넘긴 Params 객체를 selectedId에 담아준다.

    //클릭한 data가 param에 있는데 이것을 subscribe로 reactive하게 가져온다.
    this.route.params.subscribe(  //subscribe는 비동기식 코드
      (p: Params) => this.hero = this.heroService.getHero(+p['id'])
    );

    // this.route.params.subscribe(
    //   (p: Params) => this.selectedId = p['id']
    // );
    // //받은 값으로 getHero 실행하는 것 + 받은 selectedId를 숫자로 바꾼다.
    // this.hero = this.heroService.getHero(+this.selectedId)
  }

  goBack() {
    this.location.back();
  }
}
