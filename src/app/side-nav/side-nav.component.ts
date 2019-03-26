import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  navHeight = 70; // nav height

  constructor() { }

  ngOnInit() {
  }

  goTo(i: number) {
    // $event.preventDefault();
    // tslint:disable-next-line:max-line-length
    $(window).scrollTop(i > 0 ? Math.floor($('app-section' + i + ' nav').offset().top - 70) : 0);
    // console.log(section);
  }

}
