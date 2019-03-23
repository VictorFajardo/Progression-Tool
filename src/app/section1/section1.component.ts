import { Component, OnInit } from '@angular/core';
import { TooltipService } from '../shared/tooltip.service';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {

  constructor(private tooltip: TooltipService) { }

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
}
