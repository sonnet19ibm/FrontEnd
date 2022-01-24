import { TestBed } from '@angular/core/testing';

import { ListAdminOrdersService } from './list-admin-orders.service';

describe('ListAdminOrdersService', () => {
  let service: ListAdminOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAdminOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
