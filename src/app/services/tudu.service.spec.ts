import { TestBed } from '@angular/core/testing';

import { TuduService } from './tudu.service';

describe('TuduService', () => {
  let service: TuduService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuduService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
