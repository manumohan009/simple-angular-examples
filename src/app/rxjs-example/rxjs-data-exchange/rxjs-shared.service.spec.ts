import { TestBed } from '@angular/core/testing';

import { RxjsSharedService } from './rxjs-shared.service';

describe('RxjsSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxjsSharedService = TestBed.get(RxjsSharedService);
    expect(service).toBeTruthy();
  });
});
