import { TestBed } from '@angular/core/testing';

import { VirtFormatsProvider } from './virt-formats.service';

describe('VirtFormatsService', () => {
  let service: VirtFormatsProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtFormatsProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
