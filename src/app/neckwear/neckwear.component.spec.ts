import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeckwearComponent } from './neckwear.component';

describe('NeckwearComponent', () => {
  let component: NeckwearComponent;
  let fixture: ComponentFixture<NeckwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeckwearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeckwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
