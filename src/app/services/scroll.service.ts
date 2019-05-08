import { Injectable } from '@angular/core';
import { AnalyticsService } from './analytics.service';
// import * as global from './global';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  width: number;
  navHeight: number;
  locked = false;
  animationArray = [{
    id: 0,
    start: 0,
    time: 0,
    slides: 0,
    target: $()
  }, {
    id: 0,
    start: 0,
    time: 0,
    slides: 0,
    target: $()
  }];

  constructor(private analytics: AnalyticsService) { }

  scrollProgress(pos: number) {
    // console.log('pos:', pos);
    // Menu Items
    this.menu(pos);
    this.active($('app-section0 nav .title'), $('app-nav nav'), pos);
    this.visibilityOff($('app-section1'), $('.mobile-hero-base'), pos);

    /* Section 1 */
    // Sub Animations
    this.fadeMid($('#square-1'), 100, 100, 0, 1, pos);
    this.fadeMid($('#square-2'), 50, 100, 0, 1, pos);
    this.fadeMid($('#square-3'), 0, 100, 0, 1, pos);

    /* Section 2 */
    // Section 2-1
    this.position($('#container-2-1'), $('#animation-2-1'), 0, pos);
    this.zoom($('#placeholder-1'), $('#animation-2-1 #slide-1'), 0.86, 1, pos);
    if (this.width > 1024) {
      this.moveY($('#placeholder-1'), $('#animation-2-1 #slide-1'), 0, -100, pos);
    } else {
      $('#animation-2-1 #slide-1').css('top', '');
    }
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
    this.position($('#container-2-2'), $('#animation-2-2'), 0, pos);
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
    this.position($('#container-3-1'), $('#animation-3-1'), 0, pos);
    this.visibility($('#placeholder-19-1'), $('#placeholder-20'), $('#animation-3-1 #slide-19-1'), true, pos);
    this.visibility($('#placeholder-19-2'), $('#placeholder-20'), $('#animation-3-1 #slide-19-2'), true, pos);
    this.visibility($('#placeholder-19-3'), $('#placeholder-20'), $('#animation-3-1 #slide-19-3'), true, pos);
    this.visibilityOn($('#placeholder-20-1'), $('#animation-3-1 #slide-20-1'), pos);
    this.visibilityOn($('#placeholder-20-2'), $('#animation-3-1 #slide-20-2'), pos);
    this.visibilityOn($('#placeholder-20-3'), $('#animation-3-1 #slide-20-3'), pos);
    this.animate($('#placeholder-21'), $('#animation-3-1-end'), $('#animation-3-1 #slide-21'), 0, 57, 3000, pos);
    this.visibilityOn($('#placeholder-21'), $('#animation-3-1 #slide-21'), pos);
    // Section 3-2
    this.position($('#container-3-2'), $('#animation-3-2'), 0, pos);
    this.animate($('#animation-3-2'), $('#animation-3-2-end'), $('#animation-3-2 #slide-24'), 1, 35, 1800, pos);
    // Section 3-3
    this.position($('#container-3-3'), $('#animation-3-3'), 0, pos);
    this.visibilityOn($('#placeholder-26'), $('#animation-3-3 #slide-26'), pos);
    this.visibilityOn($('#placeholder-27'), $('#animation-3-3 #slide-27'), pos);
    this.fade($('#placeholder-27'), $('#animation-3-3 #slide-28'), 0, 1, pos);
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

    /* Section 5 */
    this.play($('#video-5-1'), true, pos);
    this.play($('#video-5-2'), true, pos);
    this.play($('#video-5-3'), true, pos);

    /* Section 5 */
    this.play($('#video-background-6'), true, pos);
  }

  position(source: any, target: any, top: number, pos: number) {
    // console.log(pos, source, target);
    // Start Point
    if (pos >= source.offset().top + top - this.navHeight) {
      if (!target.hasClass('fixed')) {
        target.addClass('fixed');
      }
    } else {
      if (target.hasClass('fixed')) {
        target.removeClass('fixed');
      }
    }
    // End Point
    if (pos >= source.children().last().offset().top + top - this.navHeight) {
      if (!target.hasClass('absolute')) {
        target.addClass('absolute');
      }
    } else {
      if (target.hasClass('absolute')) {
        target.removeClass('absolute');
      }
    }
  }

  animate(start: any, end: any, target: any, index: number, slides: number, time: number, pos: number) {
    // tslint:disable-next-line:max-line-length
    if (pos >= start.offset().top - (start.attr('id') + '-end' === end.attr('id') ? window.innerHeight : this.navHeight) && pos < end.offset().top + end.outerHeight() - this.navHeight) {
      if (!target.hasClass('animate')) {
        target.addClass('animate');
        this.animationArray[index].start = 0;
        this.animationArray[index].time = time;
        this.animationArray[index].slides = slides;
        this.animationArray[index].target = target;
        this.animation(index);
      }
    } else {
      if (target.hasClass('animate')) {
        target.removeClass('animate');
        this.cancelAnimation(this.animationArray[index].id);
        // tslint:disable-next-line:max-line-length
        this.animationArray[index].target.css('background-position', '0 0');
      }
    }
  }

  animation(index: number) {
    if (this.animationArray[index].start === 0) {
      this.animationArray[index].start = new Date().getTime();
    }
    const now = new Date().getTime();
    // tslint:disable-next-line:max-line-length
    const value = Math.floor(this.animationArray[index].slides * (now - this.animationArray[index].start) / this.animationArray[index].time);
    if (value < this.animationArray[index].slides) {
      // tslint:disable-next-line:max-line-length
      const gap = this.animationArray[index].target.height() !== this.animationArray[index].target.width() ? 0.5 : 0;
      // tslint:disable-next-line:max-line-length
      this.animationArray[index].target.css('background-position', '0 ' + -1 * (this.animationArray[index].target.height() - gap) * value + 'px');
    }
    if (now - this.animationArray[index].start >= this.animationArray[index].time) {
      this.animationArray[index].start = 0;
    }
    this.animationArray[index].id = requestAnimationFrame(() => this.animation(index));
  }

  cancelAnimation(id: any) {
    cancelAnimationFrame(id);
  }

  play(target: any, option: boolean, pos: number) {
    // const promise = target.get(0).play();
    // if (promise !== undefined) {
    //   promise.then(success => {
      // tslint:disable-next-line:max-line-length
      if (pos >= target.offset().top - this.navHeight - window.innerHeight && pos < target.offset().top + target.outerHeight() - this.navHeight) {
        if (target.get(0).paused !== undefined && target.get(0).paused) {
          // console.log(target, 'play');
          target.css('visibility', 'visible');
          target.get(0).play();
        }
      } else {
        if (target.get(0).paused !== undefined && !target.get(0).paused) {
          // console.log(!target.get(0).paused, target, 'pause');
          target.css('visibility', '');
          target.get(0).pause();
        }
      }
    //   }).catch(error => {
    //     // console.log('Autoplay is not available!');
    //   });
    // }
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

  visibilityOff(start: any, target: any, pos: number) {
    target.css('visibility', pos >= start.offset().top - this.navHeight ? 'hidden' : 'visible');
  }

  zoom(source: any, target: any, initial: number, final: number, pos: number) {
    if (pos >= source.offset().top - this.navHeight && pos <= source.offset().top - this.navHeight + source.outerHeight()) {
      // tslint:disable-next-line:max-line-length
      target.css('transform', 'scale(' + (initial + (final - initial) * (pos - source.offset().top + this.navHeight) / source.outerHeight()) + ')');
    } else {
      target.css('transform', 'scale(' + (pos < source.offset().top ? initial : final) + ')');
    }
  }

  moveY(source: any, target: any, initial: number, final: number, pos: number) {
    if (pos >= source.offset().top - this.navHeight && pos <= source.offset().top - this.navHeight + source.outerHeight()) {
      // tslint:disable-next-line:max-line-length
      target.css('top', (initial + (final - initial) * (pos - source.offset().top + this.navHeight) / source.outerHeight()));
    } else {
      target.css('top', (pos < source.offset().top ? initial : final));
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

  lock() {
    this.locked = true;
  }

  unlock() {
    this.locked = false;
  }

  menu(pos: number) {
    for (let i = 0; i <= 6; i++) {
      // tslint:disable-next-line:max-line-length
      if (pos >= (i > 0 ? Math.floor($('app-section' + i + ' nav').offset().top - 70) : 0) && pos < (i < 6 ? Math.floor($('app-section' + (i + 1) + ' nav').offset().top - 70) : $('app-footer').offset().top)) {
        if (!$('app-side-nav .section-' + i).hasClass('active')) {
          if (!this.locked) {
            this.analytics.click(i > 0 ? 'Section ' + i : 'Home', 'Progression Tool', 'scroll');
          } else {
            this.unlock();
          }
          $('app-side-nav .nav-item.active').removeClass('active');
          $('app-side-nav .section-' + i).addClass('active');
          // tslint:disable-next-line:max-line-length
          $('app-nav #title h1').html(i === 0 ? '<span class="d-none d-lg-block">Understanding IPF Progression</span>' : $('app-side-nav .section-' + i + ' span').html() + '<span class="d-lg-none down-arrow">&#9660;</span>');
          $('app-nav #mobile-menu').val(i);
          if (i !== 0) {
            $('app-nav #logo a, app-nav #social-media a').addClass('active');
          } else {
            $('app-nav #logo a, app-nav #social-media a').removeClass('active');
          }
        }
      }
    }
  }

  active(start: any, target: any, pos: number) {
    if (pos >= start.offset().top - this.navHeight && this.navHeight === 47) {
      if (!target.hasClass('active')) {
        target.addClass('active');
        }
    } else {
      if (target.hasClass('active')) {
        target.removeClass('active');
      }
    }
  }

  resize(width: number) {
    this.width = width;
    this.navHeight = width < 768 ? 47 : 70;
  }
}
