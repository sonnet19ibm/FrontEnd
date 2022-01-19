import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WristwearComponent } from './wristwear.component';

describe('WristwearComponent', () => {
  let component: WristwearComponent;
  let fixture: ComponentFixture<WristwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WristwearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WristwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
