import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.scss']
})
export class Section6Component implements OnInit {

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:only-arrow-functions
    $('.star').hover(function() {
      // console.log($(this));
      // tslint:disable-next-line:radix
      const id = parseInt($(this).attr('id').substr(-1));
      let value: string;
      switch (id) {
        case 1:
          value = 'Very Unhelpful';
          break;
        case 2:
          value = 'Unhelpful';
          break;
        case 3:
          value = 'Fairly Helpful';
          break;
        case 4:
          value = 'Helpful';
          break;
        case 5:
          value = 'Very Helpful';
          break;
        default:
          break;
      }
      $('#rating-text').html(value);
      $('#rating-text').addClass('on');
    },
    // tslint:disable-next-line:only-arrow-functions
    function() {
      $('#rating-text').removeClass('on');
    });
  }

}
