import { TestBed } from '@angular/core/testing';

import { ApiStarshipsService } from './api-starships.service';

describe('ApiStarshipsService', () => {
  let service: ApiStarshipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStarshipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
