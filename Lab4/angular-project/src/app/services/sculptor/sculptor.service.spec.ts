import { TestBed } from '@angular/core/testing';

import { SculptorService } from './sculptor.service';

describe('SculptorService', () => {
  let service: SculptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SculptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
