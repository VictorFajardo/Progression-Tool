import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    // tslint:disable-next-line:only-arrow-functions
    $('.interstitial').on('click', function() {
      $.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>');
    });
  }

}
