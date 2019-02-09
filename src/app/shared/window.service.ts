import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor() { }

  windowSize(width: number) {
    console.log('width:', width);
  }
}
