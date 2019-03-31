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

  navHeight = 70;

  constructor() { }

  resize(width: number, height: number) {
    const self = this;
    if (this.base > height - 70) {
      // tslint:disable-next-line:only-arrow-functions
      $('.slide-base').each(function() {
          $(this).width(height - 70);
      });
      console.log('resizing animations', height - 70);
    } else {
      $('.slide-base').each(function() {
        $(this).css('width', '');
      });
    }
  }
}
