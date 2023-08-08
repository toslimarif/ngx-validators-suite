import { TestBed } from '@angular/core/testing';

import { NgxValidatorsSuiteService } from './ngx-validators-suite.service';

describe('NgxValidatorsSuiteService', () => {
  let service: NgxValidatorsSuiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxValidatorsSuiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
