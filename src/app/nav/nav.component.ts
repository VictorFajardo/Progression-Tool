import { Component, OnInit, HostListener } from '@angular/core';
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

  // @HostListener('window:scroll', ['$event'])
  // doSomethingOnInternalScroll($event: Event) {
  //   const scrollOffset = $event.srcElement.children[0].scrollTop;
  //   console.log('scroll: ', scrollOffset);
  // }
}
