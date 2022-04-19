import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusqDenunPasoTresComponent } from './busq-denun-paso-tres.component';

describe('BusqDenunPasoTresComponent', () => {
  let component: BusqDenunPasoTresComponent;
  let fixture: ComponentFixture<BusqDenunPasoTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusqDenunPasoTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusqDenunPasoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
