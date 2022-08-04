import { TestBed } from '@angular/core/testing';

import { ProdusenService } from './produsen.service';

describe('ProdusenService', () => {
  let service: ProdusenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdusenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
