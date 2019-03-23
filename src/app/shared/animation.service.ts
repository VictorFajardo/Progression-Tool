import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  base = 812;

  constructor() { }

  resize(width: number, height: number) {
    const self = this;
    console.log($('#animation-3-1').width());
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
