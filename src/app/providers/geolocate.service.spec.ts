import { TestBed } from '@angular/core/testing';

import { GeolocateProvider } from './geolocate.service';

describe('GeolocateService', () => {
  let service: GeolocateProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeolocateProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
