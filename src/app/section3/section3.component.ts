import { Component, OnInit } from '@angular/core';
import { InterstitialService } from '../shared/interstitial.service';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {

  constructor(private external: InterstitialService) { }

  ngOnInit() {
  }

  openExternal($event: Event) {
    this.external.open($event);
  }
}
