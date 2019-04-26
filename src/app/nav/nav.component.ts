import { Component, OnInit } from '@angular/core';
import { GridService } from '../services/grid.service';
import { AnalyticsService } from '../services/analytics.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private grid: GridService, private analytics: AnalyticsService) { }

  ngOnInit() {
  }

  showGrid() {
    this.grid.show();
  }

  share(service: string) {
    $('.at-svc-' + service)[0].click();
    this.analytics.click(service, 'Progression Tool', 'share');
  }

  showMenu() {
    $('app-mobile-menu ul').toggle('slow');
  }

}
