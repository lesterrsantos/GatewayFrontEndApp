import { TestBed } from '@angular/core/testing';

import { GatewayService } from './gateway.service';

describe('TutorialService', () => {
  let service: GatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
