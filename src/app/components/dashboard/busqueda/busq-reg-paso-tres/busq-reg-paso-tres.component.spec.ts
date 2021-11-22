import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusqRegPasoTresComponent } from './busq-reg-paso-tres.component';

describe('BusqRegPasoTresComponent', () => {
  let component: BusqRegPasoTresComponent;
  let fixture: ComponentFixture<BusqRegPasoTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusqRegPasoTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusqRegPasoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
