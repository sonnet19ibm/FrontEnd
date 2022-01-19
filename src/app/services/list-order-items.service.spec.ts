import { TestBed } from '@angular/core/testing';

import { ListOrderItemsService } from './list-order-items.service';

describe('ListOrderItemsService', () => {
  let service: ListOrderItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOrderItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
