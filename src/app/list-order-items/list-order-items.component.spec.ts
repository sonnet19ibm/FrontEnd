import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderItemsComponent } from './list-order-items.component';

describe('ListOrderItemsComponent', () => {
  let component: ListOrderItemsComponent;
  let fixture: ComponentFixture<ListOrderItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrderItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
