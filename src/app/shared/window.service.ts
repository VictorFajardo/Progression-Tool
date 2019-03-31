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
  }
}
