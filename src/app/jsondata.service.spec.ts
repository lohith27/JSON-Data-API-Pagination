import { TestBed } from '@angular/core/testing';

import { JSONDATAService } from './jsondata.service';

describe('JSONDATAService', () => {
  let service: JSONDATAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSONDATAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
