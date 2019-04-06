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
    $('#facebook img').attr('src', 'assets/icons/facebook-white-icon.svg');
    $('#twitter img').attr('src', 'assets/icons/twitter-white-icon.svg');
    // $('#logo-container').css('background-image', 'url("assets/icons/lungs-and-you-white.svg")');
  }

  showGrid() {
    this.grid.show();
  }

  goTo(i: number) {
    // tslint:disable-next-line:max-line-length
    $(window).scrollTop(i > 0 ? Math.floor($('app-section' + i + ' nav').offset().top - $('nav.main-nav').height()) : 0);
  }

  share(service: string) {
    console.log('sharing');
    $('.at-svc-' + service)[0].click();
  }

  showMenu() {
    $('app-mobile-menu ul').toggle('slow');
  }

}
