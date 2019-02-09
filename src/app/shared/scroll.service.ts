import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  // cont2 = $('#container-2').offset().top;
  // timeZoom = 400; // distance in pixels
  navHeight = 70; // nav height
  gap = 14;

  constructor() {
    // console.log($('#container-2').offset().top);
   }

  scrollProgress(pos: number) {
    console.log('pos:', pos);
    // console.log(pos, $('#animation-1').offset().top,  $('#placeholder-5').offset().top);
    // console.log();
    /* SECTION-2 */
    // Start Point
    if (pos >= $('#container-2').offset().top - this.navHeight) {
      if (!$('#animation-1').hasClass('fixed')) {
        console.log('#animation-1 fixed!');
        $('#animation-1').addClass('fixed');
      }
    } else {
      if ($('#animation-1').hasClass('fixed')) {
        console.log('#animation-1 remove fixed!');
        $('#animation-1').removeClass('fixed');
      }
    }
    // End Point
    if (pos >= $('#placeholder-5').offset().top - this.gap) {
      if (!$('#animation-1').hasClass('absolute')) {
        console.log('#animation-1 absolute!');
        $('#animation-1').addClass('absolute');
      }
    } else {
      if ($('#animation-1').hasClass('absolute')) {
        console.log('#animation-1 remove absolute!');
        $('#animation-1').removeClass('absolute');
      }
    }
    // Sub Animations
    this.zoom($('#placeholder-1'), $('#animation-1'), 1, 1.16, pos);
    this.fade($('#placeholder-2'), $('#animation-1 #slide-2'), 0, 1, pos);
    this.zoom($('#placeholder-3'), $('#animation-1 #slide-3'), .03, 1, pos);
    this.opacity($('#placeholder-3'), $('#animation-1 #slide-3'), pos);
    this.zoom($('#placeholder-4'), $('#animation-1 #slide-4'), .03, 1, pos);
    this.opacity($('#placeholder-4'), $('#animation-1 #slide-4'), pos);
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

  opacity(source: any, target: any, pos: number) {
    target.css('opacity', pos >= source.offset().top - this.navHeight ? 1 : 0);
  }
}
