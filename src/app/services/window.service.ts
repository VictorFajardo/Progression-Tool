import { Injectable } from '@angular/core';
import { TooltipService } from './tooltip.service';
import { AnimationService } from './animation.service';
import { ScrollService } from './scroll.service';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  // tslint:disable-next-line:max-line-length
  constructor(private animation: AnimationService, private tooltip: TooltipService, private scroll: ScrollService) { }

  windowSize(width: number, height: number) {
    console.log('width:', width, 'height:', height);
    this.animation.resize(width, height);
    this.tooltip.resize();
    this.scroll.resize(width);
  }

}
