import { TestBed } from '@angular/core/testing';

import { ServiceGroupsProvider } from './service-groups.service';

describe('ServiceGroupsService', () => {
  let service: ServiceGroupsProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGroupsProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
