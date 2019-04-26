import { Component, OnInit } from '@angular/core';
import { TooltipService } from '../services/tooltip.service';
import { InterstitialService } from '../services/interstitial.service';
import { AnalyticsService } from '../services/analytics.service';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {

  constructor(private tooltip: TooltipService, private external: InterstitialService, private analytics: AnalyticsService) { }

  ngOnInit() {
  }

  showTooltip($event: Event) {
    this.tooltip.show($event);
  }

  hideTooltip($event: Event) {
    this.tooltip.hide($event);
  }

  focusoutTooltip($event: Event) {
    this.tooltip.focusout($event);
  }

  openExternal($event: Event) {
    this.analytics.click('Learn about a Treatment for IPF', 'Exit Link', 'click_1');
    this.external.open($event);
  }
}
