import { Component, OnInit } from '@angular/core';
import { InterstitialService } from '../services/interstitial.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private external: InterstitialService) { }

  ngOnInit() {
   }

   openExternal($event: Event) {
    this.external.open($event);
  }
}
