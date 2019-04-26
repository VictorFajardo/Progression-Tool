import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private scroll: ScrollService) { }

  ngOnInit() {
  }

  goTo(i: number) {
    this.scroll.lock();
    // tslint:disable-next-line:max-line-length
    $(window).scrollTop(i > 0 ? Math.floor($('app-section' + i + ' nav').offset().top - $('nav.main-nav').height()) : 0);
    $('app-mobile-menu ul').toggle('slow');
    this.analytics.click(i > 0 ? 'Section ' + i : 'Home', 'Progression_Nav', 'click');
  }
}
