import { TestBed } from '@angular/core/testing';

import { InterstitialService } from './interstitial.service';

describe('InterstitialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterstitialService = TestBed.get(InterstitialService);
    expect(service).toBeTruthy();
  });
});
