import { TestBed } from '@angular/core/testing';

import { EmployDetailService } from './employ-detail.service';

describe('EmployDetailService', () => {
  let service: EmployDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});