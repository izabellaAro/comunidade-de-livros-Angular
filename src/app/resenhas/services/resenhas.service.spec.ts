import { TestBed } from '@angular/core/testing';

import { ResenhasService } from './resenhas.service';

describe('ResenhasService', () => {
  let service: ResenhasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResenhasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
