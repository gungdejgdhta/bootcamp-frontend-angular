import { TestBed } from '@angular/core/testing';

import { ProdukService } from './produk.service';

describe('ProdukService', () => {
  let service: ProdukService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdukService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
