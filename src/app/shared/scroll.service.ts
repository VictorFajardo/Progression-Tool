import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  // cont2 = start.offset().top;
  // timeZoom = 400; // distance in pixels
  navHeight = 70; // nav height
  gap = 14;

  constructor() {
    // console.log($('#container-2').offset().top);
   }

  scrollProgress(pos: number) {
    // console.log('pos:', pos);

    // Menu Items
    this.menu(pos);

    // Animations
    this.position($('#container-2'), $('#placeholder-5'), $('#animation-1'), pos);

    // Sub Animations
    this.zoom($('#placeholder-1'), $('#animation-1 #slide-1'), 0.86, 1, pos);
    this.fade($('#placeholder-2'), $('#animation-1 #slide-2'), 0, 1, pos);
    this.zoom($('#placeholder-3'), $('#animation-1 #slide-3'), .03, 1, pos);
    this.visibility($('#placeholder-3'), $('#animation-1 #slide-3'), pos);
    this.zoom($('#placeholder-4'), $('#animation-1 #slide-4'), .03, 1, pos);
    this.visibility($('#placeholder-4'), $('#animation-1 #slide-4'), pos);
  }

  position(start: any, end: any, target: any, pos: number) {
    // Start Point
    if (pos >= start.offset().top - this.navHeight) {
      if (!target.hasClass('fixed')) {
        target.addClass('fixed');
      }
    } else {
      if (target.hasClass('fixed')) {
        target.removeClass('fixed');
      }
    }
    // End Point
    if (pos >= end.offset().top - this.navHeight) {
      if (!target.hasClass('absolute')) {
        target.addClass('absolute');
      }
    } else {
      if (target.hasClass('absolute')) {
        target.removeClass('absolute');
      }
    }
  }

  visibility(source: any, target: any, pos: number) {
    target.css('visibility', pos >= source.offset().top - this.navHeight ? 'visible' : 'hidden');
  }

  zoom(source: any, target: any, initial: number, final: number, pos: number) {
    if (pos >= source.offset().top - this.navHeight && pos <= source.offset().top - this.navHeight + source.outerHeight()) {
      // console.log(initial + (final - initial) * (pos - source.offset().top + this.navHeight) / source.outerHeight());
      // tslint:disable-next-line:max-line-length
      target.css('transform', 'scale(' + ( initial + (final - initial) * (pos - source.offset().top + this.navHeight) / source.outerHeight()) + ')');
    } else {
      target.css('transform', 'scale(' + (pos < source.offset().top ? initial : final) + ')');
    }
  }

  fade(source: any, target: any, initial: number, final: number, pos: number) {
    if (pos >= source.offset().top - this.navHeight && pos <= source.offset().top - this.navHeight + source.outerHeight()) {
      // console.log(initial + (final - initial) * (pos - source.offset().top + this.navHeight) / source.outerHeight());
      target.css('opacity', (initial + (final - initial) * (pos - source.offset().top + this.navHeight) / source.outerHeight()));
    } else {
      target.css('opacity', pos < source.offset().top ? initial : final);
    }
  }

  menu(pos: number) {
    for (let i = 0; i < 3; i++) {
      // tslint:disable-next-line:max-line-length
      if (pos >= $('app-section' + i).offset().top - this.navHeight && pos < (i < 2 ? $('app-section' + (i + 1)).offset().top - this.navHeight : $('app-footer').offset().top)) {
        $('app-side-nav .nav-item.active').removeClass('active');
        $('app-side-nav .section-' + i).addClass('active');
      }
    }
  }
}
