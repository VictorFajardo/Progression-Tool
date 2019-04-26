import { Component, OnInit } from '@angular/core';
import { InterstitialService } from '../services/interstitial.service';
import { AnalyticsService } from '../services/analytics.service';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {

  constructor(private external: InterstitialService, private analytics: AnalyticsService) { }

  ngOnInit() {
  }

  openExternal($event: Event) {
    this.analytics.click('Learn about a Treatment for IPF', 'Exit Link', 'click_2');
    this.external.open($event);
  }
}
