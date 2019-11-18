import { TestBed } from '@angular/core/testing';

import { KegtrackingService } from './kegtracking.service';

describe('KegtrackingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KegtrackingService = TestBed.get(KegtrackingService);
    expect(service).toBeTruthy();
  });
});
