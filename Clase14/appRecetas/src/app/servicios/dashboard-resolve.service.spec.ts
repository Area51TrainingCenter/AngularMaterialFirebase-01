import { TestBed } from '@angular/core/testing';

import { DashboardResolveService } from './dashboard-resolve.service';

describe('DashboardResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardResolveService = TestBed.get(DashboardResolveService);
    expect(service).toBeTruthy();
  });
});
