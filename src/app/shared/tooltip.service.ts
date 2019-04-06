import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  constructor() { }

  show($target: any) {
    const self = this;
    const element = $($target).is('img') ? $($target).parent() : $($target);
    const hint = $('#' + element.attr('hint-data'));
    hint.show();
    this.positioning(element, hint);
  }

  focusout($target: any) {
    const element = $($target).is('img') ? $($target).parent() : $($target);
    const hint = $('#' + element.attr('hint-data'));
    hint.hide();
  }

  hide($target: any) {
    const hint = $($target).parent().parent();
    hint.hide();
  }

  positioning($element: any, $hint: any) {
    $hint.css('top', $element.position().top + 40);
    $hint.children('.arrow').css('left', $element.position().left + $element.width() - 26);
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


