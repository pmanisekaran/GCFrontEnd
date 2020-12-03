import { TestBed } from '@angular/core/testing';

import { CreateDeviceService } from './create-device.service';

describe('CreateDeviceService', () => {
  let service: CreateDeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateDeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
