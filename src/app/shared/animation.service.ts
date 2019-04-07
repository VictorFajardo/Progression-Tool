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
      const src = $(this).attr('data-src');
      if (width < 768) {
        $(this).attr('src', src.replace('.', '-m.'));
      } else {
        $(this).attr('src', src);
      }
    });

    if (this.base > height - this.navHeight) {
      // tslint:disable-next-line:only-arrow-functions
      $('.slide-base').each(function() {
          $(this).width(height - self.navHeight);
      });
      // console.log('resizing base animation to: ', height - this.navHeight);
    } else {
      $('.slide-base').each(function() {
        $(this).css('width', '');
      });
    }
  }
}
