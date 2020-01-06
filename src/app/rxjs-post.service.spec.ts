import { TestBed } from '@angular/core/testing';

import { RxjsPostService } from './rxjs-example/rxjs-services/rxjs-post.service';

describe('RxjsPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxjsPostService = TestBed.get(RxjsPostService);
    expect(service).toBeTruthy();
  });
});
