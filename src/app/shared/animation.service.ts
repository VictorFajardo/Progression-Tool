import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  base = 812;
  count = 1;
  start = 0;
  now: number;
  id: any;
  image: any;

  navHeight: number;

  constructor() { }

  resize(width: number, height: number) {
    const self = this;
    this.navHeight = width < 768 ? 47 : 70;

    // tslint:disable-next-line:only-arrow-functions
    $('.responsive').each(function() {
      // tslint:disable-next-line:max-line-length
      const src = width < ($(this).hasClass('tablet') ? 1025 : 768) ? $(this).attr('data-src').replace('.', '-m.') : $(this).attr('data-src');
      const attr = $(this).hasClass('data-src') ? 'data-src' : 'src';
      $(this).attr(attr, src);
    });

    if (width >= 768) {
      if (this.base > height - this.navHeight) {
        // tslint:disable-next-line:only-arrow-functions
        $('.slide-base').each(function() {
            $(this).width(height - self.navHeight);
            // $('#debugger p').html('base width: ' + (height - self.navHeight));
        });
      } else {
        $('.slide-base').each(function() {
          $(this).css('width', '');
        });
      }
    }
  }
}
