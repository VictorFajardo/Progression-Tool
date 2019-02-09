import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollService } from './shared/scroll.service';
import { WindowService } from './shared/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'progression-tool';

  constructor(private scroll: ScrollService, private window: WindowService) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: Event) {
    const scrollOffset = $event.srcElement.children[0].scrollTop;
    this.scroll.scrollProgress(scrollOffset);
  }

  @HostListener('window:resize', ['$event'])
  onResize($event: Event) {
    const screenWidth = window.innerWidth;
    this.window.windowSize(screenWidth);
  }

  ngOnInit() {
    this.window.windowSize(window.innerWidth);
  }
}
