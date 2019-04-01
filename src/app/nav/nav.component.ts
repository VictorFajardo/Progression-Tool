import { Component, OnInit } from '@angular/core';
import { GridService } from '../shared/grid.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private grid: GridService) { }

  ngOnInit() {
    // this.grid.show();
  }

  showGrid() {
    this.grid.show();
  }

  goTo(i: number) {
    // console.log(i);
    // tslint:disable-next-line:max-line-length
    $(window).scrollTop(i > 0 ? Math.floor($('app-section' + i + ' nav').offset().top - 70) : 0);
  }
}
