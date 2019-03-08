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

    /* Section 1 */
    // Sub Animations
    this.fadeMid($('#square-1'), 100, 100, 0, 1, pos);
    this.fadeMid($('#square-2'), 50, 100, 0, 1, pos);
    this.fadeMid($('#square-3'), 0, 100, 0, 1, pos);

    /* Section 2 */
    // Section 2-1
    this.position($('#container-2-1'), $('#animation-2-1'), pos);
    this.zoom($('#placeholder-1'), $('#animation-2-1 #slide-1'), 0.86, 1, pos);
    this.fade($('#placeholder-2'), $('#animation-2-1 #slide-2'), 0, 1, pos);
    this.visibility($('#placeholder-3-1'), $('#placeholder-4'), $('#animation-2-1 #slide-3-1'), true, pos);
    this.visibility($('#placeholder-3-2'), $('#placeholder-4'), $('#animation-2-1 #slide-3-2'), true, pos);
    this.visibilityOn($('#placeholder-4'), $('#animation-2-1 #slide-4'), pos);
    this.zoom($('#placeholder-4'), $('#animation-2-1 #slide-4'), .03, 1, pos);
    this.visibility($('#placeholder-5-1'), $('#placeholder-6'), $('#animation-2-1 #slide-5-1'), true, pos);
    this.visibility($('#placeholder-5-2'), $('#placeholder-6'), $('#animation-2-1 #slide-5-2'), true, pos);
    this.visibility($('#placeholder-5-3'), $('#placeholder-6'), $('#animation-2-1 #slide-5-3'), true, pos);
    this.visibilityOn($('#placeholder-6'), $('#animation-2-1 #slide-6'), pos);
    this.zoom($('#placeholder-6'), $('#animation-2-1 #slide-6'), .1, 1, pos);
    this.visibility($('#placeholder-7-1'), $('#placeholder-8'), $('#animation-2-1 #slide-7-1'), true, pos);
    this.visibility($('#placeholder-7-2'), $('#placeholder-8'), $('#animation-2-1 #slide-7-2'), true, pos);
    this.visibility($('#placeholder-7-3'), $('#placeholder-8'), $('#animation-2-1 #slide-7-3'), true, pos);
    this.fade($('#placeholder-8'), $('#animation-2-1 #slide-8'), 0, 1, pos);
    this.visibility($('#placeholder-9-1'), $('#placeholder-10'), $('#animation-2-1 #slide-9-1'), true, pos);
    this.visibility($('#placeholder-9-2'), $('#placeholder-10'), $('#animation-2-1 #slide-9-2'), true, pos);
    this.visibility($('#placeholder-9-3'), $('#placeholder-10'), $('#animation-2-1 #slide-9-3'), true, pos);
    this.fade($('#placeholder-10'), $('#animation-2-1 #slide-10'), 0, 1, pos);
    this.visibilityOn($('#placeholder-11-1'), $('#animation-2-1 #slide-11-1'), pos);
    this.visibilityOn($('#placeholder-11-2'), $('#animation-2-1 #slide-11-2'), pos);
    // Section 2-1
    this.position($('#container-2-2'), $('#animation-2-2'), pos);
    this.visibility($('#placeholder-13-1'), $('#placeholder-14'), $('#animation-2-2 #slide-13-1'), true, pos);
    this.visibility($('#placeholder-13-2'), $('#placeholder-14'), $('#animation-2-2 #slide-13-2'), true, pos);
    this.fade($('#placeholder-14'), $('#animation-2-2 #slide-14'), 0, 1, pos);
    this.visibility($('#placeholder-15-1'), $('#placeholder-16'), $('#animation-2-2 #slide-15-1'), true, pos);
    this.visibility($('#placeholder-15-2'), $('#placeholder-16'), $('#animation-2-2 #slide-15-2'), true, pos);
    this.visibility($('#placeholder-15-3'), $('#placeholder-16'), $('#animation-2-2 #slide-15-3'), true, pos);
    this.visibility($('#placeholder-15-4'), $('#placeholder-16'), $('#animation-2-2 #slide-15-4'), true, pos);
    this.fade($('#placeholder-16'), $('#animation-2-2 #slide-16'), 0, 1, pos);
    this.visibilityOn($('#placeholder-17-1'), $('#animation-2-2 #slide-17-1'), pos);
    this.visibilityOn($('#placeholder-17-2'), $('#animation-2-2 #slide-17-2'), pos);
    this.visibilityOn($('#placeholder-17-3'), $('#animation-2-2 #slide-17-3'), pos);

    /* Section 3 */
    // Section 3-1
    this.position($('#container-3-1'), $('#animation-3-1'), pos);
    this.visibility($('#placeholder-19-1'), $('#placeholder-20'), $('#animation-3-1 #slide-19-1'), true, pos);
    this.visibility($('#placeholder-19-2'), $('#placeholder-20'), $('#animation-3-1 #slide-19-2'), true, pos);
    this.visibility($('#placeholder-19-3'), $('#placeholder-20'), $('#animation-3-1 #slide-19-3'), true, pos);
    this.visibilityOn($('#placeholder-20-1'), $('#animation-3-1 #slide-20-1'), pos);
    this.visibilityOn($('#placeholder-20-2'), $('#animation-3-1 #slide-20-2'), pos);
    this.visibilityOn($('#placeholder-20-3'), $('#animation-3-1 #slide-20-3'), pos);
    // Section 3-2
    this.position($('#container-3-2'), $('#animation-3-2'), pos);
    // Section 3-3
    this.position($('#container-3-3'), $('#animation-3-3'), pos);
    this.visibilityOn($('#placeholder-26'), $('#animation-3-3 #slide-26'), pos);
    this.visibilityOn($('#placeholder-27'), $('#animation-3-3 #slide-27'), pos);
    this.fade($('#placeholder-28'), $('#animation-3-3 #slide-28'), 0, 1, pos);
    this.visibilityOn($('#placeholder-29'), $('#animation-3-3 #slide-29'), pos);
    this.fade($('#placeholder-29'), $('#animation-3-3 #slide-30'), 0, 1, pos);
    this.fade($('#placeholder-31'), $('#animation-3-3 #slide-31'), 0, 1, pos);

    /* Section 4 */
    this.fadeMid($('#square-4'), 100, 100, 0, 1, pos);
    this.fadeMid($('#square-5'), 50, 100, 0, 1, pos);
    this.fadeMid($('#square-6'), 0, 100, 0, 1, pos);
    this.fadeMid($('#square-7'), 100, 100, 0, 1, pos);
    this.fadeMid($('#square-8'), 50, 100, 0, 1, pos);
    this.fadeMid($('#square-9'), 0, 100, 0, 1, pos);
    this.fadeMid($('#ladder-step1'), 100, 100, 0, 1, pos);
    this.fadeMid($('#ladder-step2'), 100, 100, 0, 1, pos);
    this.fadeMid($('#ladder-step3'), 100, 100, 0, 1, pos);
    this.fadeMid($('#ladder-step4'), 100, 100, 0, 1, pos);
  }

  position(source: any, target: any, pos: number) {
    // console.log(pos, source, target);
    // Start Point
    if (pos >= source.offset().top - this.navHeight) {
      if (!target.hasClass('fixed')) {
        target.addClass('fixed');
      }
    } else {
      if (target.hasClass('fixed')) {
        target.removeClass('fixed');
      }
    }
    // End Point
    if (pos >= source.children().last().offset().top - this.navHeight) {
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

  fadeMid(target: any, gap: number, length: number, initial: number, final: number, pos: number) {
    if (pos >= target.offset().top - gap - window.innerHeight / 2 && pos <= target.offset().top - gap - window.innerHeight / 2 + length) {
      // console.log(initial + (final - initial) * (pos - target.offset().top + gap + window.innerHeight / 2) / length);
      target.css('opacity', (initial + (final - initial) * (pos - target.offset().top + gap + window.innerHeight / 2) / length));
    } else {
      target.css('opacity', pos < target.offset().top - gap - window.innerHeight / 2 ? initial : final);
    }
  }

  menu(pos: number) {
    for (let i = 0; i <= 6; i++) {
      // tslint:disable-next-line:max-line-length
      if (pos >= (i > 0 ? Math.floor($('app-section' + i + ' .label').offset().top + $('app-section' + i + ' .label').outerHeight() - window.innerHeight / 2) : 0) && pos < (i < 2 ? Math.floor($('app-section' + (i + 1) + ' .label').offset().top + $('app-section' + (i + 1) + ' .label').outerHeight() - window.innerHeight / 2) : $('app-footer').offset().top)) {
        $('app-side-nav .nav-item.active').removeClass('active');
        $('app-side-nav .section-' + i).addClass('active');
      }
    }
  }
}
