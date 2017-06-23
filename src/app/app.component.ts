import {Component} from '@angular/core';

/**
 * - type of javascript variable
 *  1. number
 *  2. string
 *  3. boolean
 *  4. object (array, function)
 */
// class Hero {   //다른 Component 에서도 사용되기 때문에 다른 ts 파일로
//   id: number;
//   name: string;
// }


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',  //현재 디렉토리
  styleUrls: ['./app.component.css'],
  //template: ``                        //backtick `` 사용
})
export class AppComponent {   //변수, method 정의
  title = 'Tour of Heroes';

  //hero = 'Windstorm';
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }
}

