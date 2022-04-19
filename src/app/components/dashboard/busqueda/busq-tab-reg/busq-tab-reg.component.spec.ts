import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusqTabRegComponent } from './busq-tab-reg.component';

describe('BusqTabRegComponent', () => {
  let component: BusqTabRegComponent;
  let fixture: ComponentFixture<BusqTabRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusqTabRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusqTabRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
