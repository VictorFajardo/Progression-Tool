import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  constructor() { }

  show($event: Event) {
    const element = $($event.target);
    const hint = $('#' + element.attr('hint-data'));
    hint.show();
    // const hintArrow = $(hint + ':after');
    // console.log('tooltip opened', $($event.target).position());
    // console.log(element, hint);
    hint.css('top', element.position().top + 40);

  }
}
