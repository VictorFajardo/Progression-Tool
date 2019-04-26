import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  navHeight: 70;

  constructor(private analytics: AnalyticsService) { }

  ngOnInit() {
  }

  goTo(i: number) {
    // tslint:disable-next-line:max-line-length
    $(window).scrollTop(i > 0 ? Math.floor($('app-section' + i + ' nav').offset().top - $('nav.main-nav').height()) : 0);
    this.analytics.click(i > 0 ? 'Section ' + i : 'Home', 'Progression_Nav', 'click');
  }

}
