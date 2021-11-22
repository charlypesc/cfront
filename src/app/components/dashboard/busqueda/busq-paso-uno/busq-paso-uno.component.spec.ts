import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusqPasoUnoComponent } from './busq-paso-uno.component';

describe('BusqPasoUnoComponent', () => {
  let component: BusqPasoUnoComponent;
  let fixture: ComponentFixture<BusqPasoUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusqPasoUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusqPasoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
