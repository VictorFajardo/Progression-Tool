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
    $(window).scrollTop(i > 0 ? Math.floor($('app-section' + i + ' .label').offset().top + $('app-section' + i + ' .label').outerHeight() - window.innerHeight / 2) : 0);
    // console.log(section);
  }

}
