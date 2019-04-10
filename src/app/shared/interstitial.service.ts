import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class InterstitialService {

  constructor() { }

  open($target: any) {
    event.preventDefault();
    const url = $($target).closest('a').attr('href');
    $.fancybox.open({
      content: '<div id="externalFancyBox" class="fancybox_container">\
                  <h1>Leaving LungsandYou.com</h1>\
                  <hr>\
                  <p>You are leaving LungsandYou.com. This is a link to a website for a prescription medicine used to treat idiopathic pulmonary fibrosis (IPF).<br/>Please click “Continue” to proceed.</p>\
                  <p><img src="assets/icons/boehringer-ingelheim-green.svg" width="160" height="48"></p>\
                  <div class="buttons">\
                    <a class="cancel" onclick="$.fancybox.close();">Cancel</a>\
                    <a class="continue" href="' + url + '" target="_blank" onclick="$.fancybox.close();return true;">Continue</a>\
                  </div>\
                </div>',
        type: 'html',
        transitionIn  : 'elastic',
        transitionOut : 'elastic',
        autoCenter : 'true',
        // afterClose: function() {
            // $('.fancybox-wrap').removeClass('fixed');
        // },
        // afterLoad:function(){
            // var top = ($(window).height() / 2) - ($(".fancybox-wrap").outerHeight() / 2);
            // var left = ($(window).width() / 2) - ($(".fancybox-wrap").outerWidth() / 2);
            // $(".fancybox-wrap").css({ top: top, left: left});

        // },
        // afterShow:function () {
        //     $('.fancybox-wrap .fancybox-close').on('click', function() {
        //         ga('send', 'event', 'External Link', 'clickl', 'Close - '+target+': '+actualView);
        //     });
        //     $('.fancybox-wrap #cancelExternalLink').on('click', function() {
        //         ga('send', 'event', 'External Link', 'click', 'Cancel - '+target+': '+actualView);
        //     });
        //     $('.fancybox-wrap #submitExternalLink').on('click', function() {
        //         ga('send', 'event', 'External Link', 'click', 'Continue - '+target+': '+actualView);
        //     });
        // }
    });
  }
}
