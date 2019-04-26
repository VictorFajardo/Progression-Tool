import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta) {}

  addMeta() {
    this.meta.addTags([
      { property: 'og:title', content: 'Understanding IPF Progression - Lungs and You' },
      { property: 'og:description', content: 'TBD' },
      { property: 'og:image', content: location.href + 'assets/main-site/share.jpg' },
      { property: 'og:type', content: 'Website' },
      { property: 'og:url', content: location.href },
      { property: 'og:alt', content: 'Understanding IPF Progression - Lungs and You' }
    ]);
  }
}
