import { TestBed } from '@angular/core/testing';

import { EndpointAPIService } from './endpoint-api.service';

describe('EndpointAPIService', () => {
  let service: EndpointAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndpointAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
