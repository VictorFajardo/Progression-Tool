import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {

  element: any;

  constructor() { }

  ngOnInit() {
    // console.log('starting requestAnimationFrame');
    // this.animation();
  }

  // animation() {
  //   // console.log('tick');
  //   if ($(window).scrollTop() >= $('#container-2-1').offset().top - 47) {
  //     console.log('fixed');
  //     if (!$('#animation-2-1').hasClass('fixed')) {
  //       $('#animation-2-1').addClass('fixed');
  //     }
  //   } else {
  //     console.log('absolute');
  //     if ($('#animation-2-1').hasClass('fixed')) {
  //       $('#animation-2-1').removeClass('fixed');
  //     }
  //   }
  //   this.element = requestAnimationFrame(() => this.animation());
  // }

  // cancelAnimation(id: any) {
  //   cancelAnimationFrame(id);
  // }
}
