import { Component, OnInit } from '@angular/core';
import { GridService } from '../shared/grid.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // navHeight: 70;

  constructor(private grid: GridService) { }

  ngOnInit() {
    this.grid.show();
  }

  showGrid() {
    this.grid.show();
  }

  goTo(i: number) {
    // console.log(this.navHeight);
    // this.navHeight = $(window).width < 768 ? 42 : 70;
    // tslint:disable-next-line:max-line-length
    $(window).scrollTop(i > 0 ? Math.floor($('app-section' + i + ' nav').offset().top - $('nav.main-nav').height()) : 0);
  }

  // resize(width: number) {
  //   // this.navHeight = width < 768 ? 42 : 70;
  // }
}
