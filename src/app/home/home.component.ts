import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {
    let c: number = 1;
    let b: number = 2;

    let e: string = '1';
    let f: string = '2';

    let g: boolean = true;
    let h: object = {};

    let i = [c, b, e, f, g, h];

    let j: boolean[] = [true, g];

    let k: object[] = [{}, h];

    let l: any[] = [1, 'aoe', {}, []];

    console.log(c + b);
    console.log(e + f);
    console.log(g);
    console.log(h);
    console.log(i);
    console.log(j);
    console.log(k);
    console.log(l);
  }

  ngOnInit() {}
}
