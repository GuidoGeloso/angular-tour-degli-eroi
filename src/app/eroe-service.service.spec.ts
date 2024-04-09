import { TestBed } from '@angular/core/testing';

import { EroeServiceService } from './eroe-service.service';

describe('EroeServiceService', () => {
  let service: EroeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EroeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
