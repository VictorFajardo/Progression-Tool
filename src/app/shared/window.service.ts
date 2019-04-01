import { Injectable } from '@angular/core';
import { TooltipService } from './tooltip.service';
import { AnimationService } from './animation.service';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor(private animation: AnimationService, private tooltip: TooltipService) { }

  windowSize(width: number, height: number) {
    console.log('width:', width, 'height:', height);
    this.animation.resize(width, height);
    this.tooltip.resize();
    this.switchMode(width);
  }

  switchMode(width: number) {
    if (width >= 1025) {
      // console.log('desktop');
      // $('app-side-nav').show();
      // $('app-nav #title').show();
      // $('app-nav #mobile-menu').hide();
    } else {
      // $('app-side-nav').hide();
      // $('app-nav #title').hide();
      // $('app-nav #mobile-menu').show();
      // console.log('mobile');
    }
  }
}
