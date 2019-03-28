import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService implements OnInit {

  base = 812;
  count = 1;
  start: number;
  now: number;
  id: any;

  constructor() { }

  ngOnInit() {
    console.log('Animation Service');
  }

  resize(width: number, height: number) {
    const self = this;
    // console.log($('#animation-3-1').width());
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

  animation() {
    if (this.start === undefined) {
      this.start = new Date().getTime();
      console.log('animation start at: ', this.start);
    }
    this.now = new Date().getTime();
    if (this.now - this.start <= 2000) {
      console.log('thick: ', this.count, 'time elapsed: ', this.now - this.start);
      this.count++;
      this.id = requestAnimationFrame(() => this.animation());
    } else {
      console.log('animation ends at: ', this.now);
      console.log('time elapsed: ', this.now - this.start, 'ticks: ', this.count);
      this.cancel_animation();
      // this.start = 0;
      // this.number = 0;
      // this.id = requestAnimationFrame(() => this.animation());
    }
  }

  start_animation() {
    // this.id = requestAnimationFrame(this.animation);
    requestAnimationFrame(this.animation.bind(this));
  }

  cancel_animation() {
    cancelAnimationFrame(this.id);
  }

}
