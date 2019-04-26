import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor() { }

  show() {
    // tslint:disable-next-line:max-line-length
    $('body').append('<div class=\'container-fluid grid-overlay\'> <div class=\'row\'> <div class=\'container content\'> <div class=\'row\'> <div class=\'col-md-1\'> <h1></h1> </div> <div class=\'col-md-1\'> <h1></h1> </div> <div class=\'col-md-1\'> <h1></h1> </div> <div class=\'col-md-1\'> <h1></h1> </div> <div class=\'col-md-1\'> <h1></h1> </div> <div class=\'col-md-1\'> <h1></h1> </div> <div class=\'col-md-1\'> <h1></h1> </div> <div class=\'col-md-1\'> <h1></h1> </div> <div class=\'col-md-1\'> <h1></h1> </div> <div class=\'col-md-1\'> <h1></h1> </div> <div class=\'col-md-1\'> <h1></h1> </div> <div class=\'col-md-1\'> <h1></h1> </div> </div> </div> </div></div>');
    // tslint:disable-next-line:max-line-length
    $('head').append('<style type=\'text/css\'>.grid-overlay, .grid-overlay-blocks {z-index: 10000;position: fixed;top: 0;width: 100%;pointer-events:none;}.grid-overlay {z-index: 10000;}.grid-overlay-blocks {z-index: 10001;}.grid-overlay .container{position: relative;}.grid-overlay .container::after {//left: -30px;}.grid-overlay .container::before {//right: -30px;}.grid-overlay div[class^=\'col-\'] {border-left: 1px dotted rgba(0, 0, 0, 0.1);border-right: 1px dotted rgba(0, 0, 0, 0.1);}.grid-overlay div[class^=\'col-\'] h1 {background-color: rgba(255, 0, 0, 0.1);height: 100vh;margin-top: 0;margin-bottom: 0;}.block-color {background-color: aliceblue;border: 1px dotted;}</style>');
    console.log('Showing Grid!');
  }
}
