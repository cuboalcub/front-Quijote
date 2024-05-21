import { TestBed } from '@angular/core/testing';

import { InvenatrioService } from './invenatrio.service';

describe('InvenatrioService', () => {
  let service: InvenatrioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvenatrioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
