import { Injectable } from '@angular/core';

declare var gtag: any;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  click(label: string, category: string, action: string) {
    gtag('event', action, {
      'event_category': category,
      'event_label': label
    });
  }
}



































