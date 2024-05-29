import { TestBed } from '@angular/core/testing';

import { SesionstorageService } from './sesionstorage.service';

describe('SesionstorageService', () => {
  let service: SesionstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SesionstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
