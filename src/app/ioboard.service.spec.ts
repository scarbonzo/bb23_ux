import { TestBed } from '@angular/core/testing';

import { IoboardService } from './ioboard.service';

describe('IoboardService', () => {
  let service: IoboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IoboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
