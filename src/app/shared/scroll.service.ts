import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  // cont2 = $('#container-2').offset().top;
  // timeZoom = 400; // distance in pixels
  navHeight = 70; // nav height

  constructor() {
    // console.log($('#container-2').offset().top);
   }

  scrollProgress(pos: number) {
    // console.log($('#animation-2').outerHeight(true) );
    // console.log();
    /* SECTION-2 */
    // Start Point
    if (pos >= $('#container-2').offset().top - this.navHeight) {
      if (!$('#animation-2').hasClass('fixed')) {
        console.log('#animation-2 fixed!');
        $('#animation-2').addClass('fixed');
      }
    } else {
      if ($('#animation-2').hasClass('fixed')) {
        console.log('#animation-2 remove fixed!');
        $('#animation-2').removeClass('fixed');
      }
    }
    // End Point
    if (pos >= $('#container-2').offset().top + $('#container-2').height() - $('#animation-2').outerHeight(true) - this.navHeight) {
      if (!$('#animation-2').hasClass('absolute')) {
        console.log('#animation-2 absolute!');
        $('#animation-2').addClass('absolute');
      }
    } else {
      if ($('#animation-2').hasClass('absolute')) {
        console.log('#animation-2 remove absolute!');
        $('#animation-2').removeClass('absolute');
      }
    }
    // Sub Animations
    this.zoom($('#placeholder-1'), $('#animation-2'), pos);
    this.fade($('#placeholder-2'), $('#animation-2 #slide-2'), pos);
  }

  zoom(source: any, target: any, pos: number) {
    if (pos >= source.offset().top - this.navHeight && pos <= source.offset().top - this.navHeight + source.outerHeight()) {
      // console.log(1 + .16 * (pos - source.offset().top + this.navHeight) / source.outerHeight());
      target.css('transform', 'scale(' + ( 1 + .16 * (pos - source.offset().top + this.navHeight) / source.outerHeight()) + ')');
    } else {
      if (pos < source.offset().top) {
        target.css('transform', 'scale(1)');
      } else {
        target.css('transform', 'scale(1.16)');
      }
    }

  }

  fade(source: any, target: any, pos: number) {
    if (pos >= source.offset().top - this.navHeight && pos <= source.offset().top - this.navHeight + source.outerHeight()) {
      // console.log((pos - source.offset().top + this.navHeight) / source.outerHeight());
      target.css('opacity', (pos - source.offset().top + this.navHeight) / source.outerHeight());
    } else {
      if (pos < source.offset().top) {
        target.css('opacity', 0);
      } else {
        target.css('opacity', 1);
      }
    }

  }
}
