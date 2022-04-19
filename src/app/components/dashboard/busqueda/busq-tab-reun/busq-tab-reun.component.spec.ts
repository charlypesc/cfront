import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusqTabReunComponent } from './busq-tab-reun.component';

describe('BusqTabReunComponent', () => {
  let component: BusqTabReunComponent;
  let fixture: ComponentFixture<BusqTabReunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusqTabReunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusqTabReunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
