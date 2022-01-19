import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdminOrdersComponent } from './list-admin-orders.component';

describe('ListAdminOrdersComponent', () => {
  let component: ListAdminOrdersComponent;
  let fixture: ComponentFixture<ListAdminOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdminOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdminOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
