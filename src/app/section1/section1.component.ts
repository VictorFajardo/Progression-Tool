import { Component, OnInit } from '@angular/core';
import { TooltipService } from '../shared/tooltip.service';
import { InterstitialService } from '../shared/interstitial.service';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {

  constructor(private tooltip: TooltipService, private external: InterstitialService) { }

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
    this.external.open($event);
  }
}
