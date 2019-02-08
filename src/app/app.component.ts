import { Component, HostListener } from '@angular/core';
import { ScrollService } from './shared/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'progression-tool';

  constructor(private scroll: ScrollService) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: Event) {
    const scrollOffset = $event.srcElement.children[0].scrollTop;
    this.scroll.scrollProgress(scrollOffset);
  }
}
