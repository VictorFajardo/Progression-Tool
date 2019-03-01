import { Injectable } from '@angular/core';
import { shallowEqual } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  constructor() { }

  show($target: any) {
    const element = $($target).is('img') ? $($target).parent() : $($target);
    const hint = $('#' + element.attr('hint-data'));
    hint.show();
    this.positioning(element, hint);
    console.log('here');
  }

  hide($target: any) {
    const hint = $($target).parent().parent();
    hint.hide();
  }

  positioning($element: any, $hint: any) {
    $hint.css('top', $element.position().top + 40);
    $hint.children('.arrow').css('left', $element.position().left + 40);
  }

  resize() {
    const self = this;
    $('.hint').each(function() {
      if ($(this).is(':visible')) {
        const hint = $(this);
        const element = $('a[hint-data=' + $(this).attr('id') + ']');
        self.positioning(element, hint);
      }
    });
  }
}


