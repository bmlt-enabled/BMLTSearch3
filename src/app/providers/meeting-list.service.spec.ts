import { TestBed } from '@angular/core/testing';

import { MeetingListProvider } from './meeting-list.service';

describe('MeetingListService', () => {
  let service: MeetingListProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingListProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
