import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  // cont2 = start.offset().top;
  // timeZoom = 400; // distance in pixels
  navHeight = 70; // nav height

  constructor() {
    // console.log($('#container-2').offset().top);
   }

  scrollProgress(pos: number) {
    // console.log('pos:', pos);

    // Menu Items
    this.menu(pos);

    // Animations
    this.position($('#container-2'), $('#placeholder-12'), $('#animation-1'), pos);

    // Sub Animations
    this.zoom($('#placeholder-1'), $('#animation-1 #slide-1'), 0.86, 1, pos);
    this.fade($('#placeholder-2'), $('#animation-1 #slide-2'), 0, 1, pos);
    this.visibility($('#placeholder-3-1'), $('#placeholder-4'), $('#animation-1 #slide-3-1'), true, pos);
    this.visibility($('#placeholder-3-2'), $('#placeholder-4'), $('#animation-1 #slide-3-2'), true, pos);
    this.visibilityOn($('#placeholder-4'), $('#animation-1 #slide-4'), pos);
    this.zoom($('#placeholder-4'), $('#animation-1 #slide-4'), .03, 1, pos);
    this.visibility($('#placeholder-5-1'), $('#placeholder-6'), $('#animation-1 #slide-5-1'), true, pos);
    this.visibility($('#placeholder-5-2'), $('#placeholder-6'), $('#animation-1 #slide-5-2'), true, pos);
    this.visibility($('#placeholder-5-3'), $('#placeholder-6'), $('#animation-1 #slide-5-3'), true, pos);
    this.visibilityOn($('#placeholder-6'), $('#animation-1 #slide-6'), pos);
    this.zoom($('#placeholder-6'), $('#animation-1 #slide-6'), .1, 1, pos);
    this.visibility($('#placeholder-7-1'), $('#placeholder-8'), $('#animation-1 #slide-7-1'), true, pos);
    this.visibility($('#placeholder-7-2'), $('#placeholder-8'), $('#animation-1 #slide-7-2'), true, pos);
    this.visibility($('#placeholder-7-3'), $('#placeholder-8'), $('#animation-1 #slide-7-3'), true, pos);
    this.fade($('#placeholder-8'), $('#animation-1 #slide-8'), 0, 1, pos);
    this.visibility($('#placeholder-9-1'), $('#placeholder-10'), $('#animation-1 #slide-9-1'), true, pos);
    this.visibility($('#placeholder-9-2'), $('#placeholder-10'), $('#animation-1 #slide-9-2'), true, pos);
    this.visibility($('#placeholder-9-3'), $('#placeholder-10'), $('#animation-1 #slide-9-3'), true, pos);
    this.fade($('#placeholder-10'), $('#animation-1 #slide-10'), 0, 1, pos);
    this.visibilityOn($('#placeholder-11-1'), $('#animation-1 #slide-11-1'), pos);
    this.visibilityOn($('#placeholder-11-2'), $('#animation-1 #slide-11-2'), pos);
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

  visibility(start: any, end: any, target: any, option: boolean, pos: number) {
    if (pos >= start.offset().top - this.navHeight && pos < end.offset().top - this.navHeight) {
      target.css('visibility', option ? 'visible' : 'hidden');
    } else {
      target.css('visibility', option ? 'hidden' : 'visible');
    }
  }

  visibilityOn(start: any, target: any, pos: number) {
    target.css('visibility', pos >= start.offset().top - this.navHeight ? 'visible' : 'hidden');
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
    for (let i = 0; i <= 3; i++) {
      // tslint:disable-next-line:max-line-length
      if (pos >= (i > 0 ? Math.floor($('app-section' + i + ' .label').offset().top + $('app-section' + i + ' .label').outerHeight() - window.innerHeight / 2) : 0) && pos < (i < 2 ? Math.floor($('app-section' + (i + 1) + ' .label').offset().top + $('app-section' + (i + 1) + ' .label').outerHeight() - window.innerHeight / 2) : $('app-footer').offset().top)) {
        $('app-side-nav .nav-item.active').removeClass('active');
        $('app-side-nav .section-' + i).addClass('active');
        // tslint:disable-next-line:max-line-length
        // console.log('landing - section: ' + i + ' - pos: ' + pos + ' - dest: ', Math.floor($('app-section' + i + ' .label').offset().top + $('app-section' + i + ' .label').outerHeight() - window.innerHeight / 2));
      }
    }
  }
}
