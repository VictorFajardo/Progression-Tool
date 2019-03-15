import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.scss']
})
export class Section6Component implements OnInit {

  rating = false;

  constructor() { }

  ngOnInit() {
    const self = this;
    // tslint:disable-next-line:only-arrow-functions
    $('.star').hover(function () {
      if (!self.rating) {
        // tslint:disable-next-line:radix
        const id = parseInt($(this).attr('id').substr(-1));
        let value: string;
        switch (id) {
          case 1:
            value = 'Very Helpful';
            break;
          case 2:
            value = 'Helpful';
            break;
          case 3:
            value = 'Fairly Helpful';
            break;
          case 4:
            value = 'Unhelpful';
            break;
          case 5:
            value = 'Very Unhelpful';
            break;
          default:
            break;
        }
        $('#rating-text').html(value);
        $('#rating-text').addClass('on');
      }
    },
      // tslint:disable-next-line:only-arrow-functions
      function() {
        if (!self.rating) {
          $('#rating-text').removeClass('on');
        }
        // tslint:disable-next-line:only-arrow-functions
      }).on('click', function(e) {
        e.preventDefault();
        if (!self.rating) {
          self.rating = true;
          $('#rating-title').html('Thank you for rating!');
          // tslint:disable-next-line:radix
          const id = parseInt($(this).attr('id').substr(-1));
          console.log(id);
          for (let i = 1; i <= 5; i++) {
            $('#star-' + i).removeClass('star').addClass('off');
            if (i < id) {
              $('#star-' + i + ' img').attr('src', 'assets/icons/rate-star-grey.svg');
            } else {
              $('#star-' + i + ' img').attr('src', 'assets/icons/rate-star-filled.svg');
            }
          }
        }
    });
  }
}
