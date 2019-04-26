import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollService } from './services/scroll.service';
import { WindowService } from './services/window.service';
import { AnimationService } from './services/animation.service';
import { MetaService } from './services/meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'progression-tool';

  // tslint:disable-next-line:max-line-length
  constructor(private scroll: ScrollService, private window: WindowService, private animation: AnimationService, private meta: MetaService) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: Event) {
    const scrollOffset = $(window).scrollTop();
    this.scroll.scrollProgress(scrollOffset);
  }

  @HostListener('window:resize', ['$event'])
  onResize($event: Event) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    this.window.windowSize(screenWidth, screenHeight);
  }

  ngOnInit() {
    // this.meta.addMeta();
    this.window.windowSize(window.innerWidth, window.innerHeight);
  }
}
