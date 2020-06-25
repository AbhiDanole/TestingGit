import { TestBed } from '@angular/core/testing';

import { HardCodedAuthentificationService } from './hard-coded-authentification.service';

describe('HardCodedAuthentificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardCodedAuthentificationService = TestBed.get(HardCodedAuthentificationService);
    expect(service).toBeTruthy();
  });
});
