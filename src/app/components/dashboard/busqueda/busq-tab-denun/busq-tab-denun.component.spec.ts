import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusqTabDenunComponent } from './busq-tab-denun.component';

describe('BusqTabDenunComponent', () => {
  let component: BusqTabDenunComponent;
  let fixture: ComponentFixture<BusqTabDenunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusqTabDenunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusqTabDenunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
