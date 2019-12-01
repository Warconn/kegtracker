import { TestBed } from '@angular/core/testing';

import { ToastingServiceService } from './toasting-service.service';

describe('ToastingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastingServiceService = TestBed.get(ToastingServiceService);
    expect(service).toBeTruthy();
  });
});
