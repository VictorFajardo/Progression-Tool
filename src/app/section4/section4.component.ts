import { Component, OnInit } from '@angular/core';
import { TooltipService } from '../services/tooltip.service';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})
export class Section4Component implements OnInit {

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
