import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiEstablecimientoComponent } from './mi-establecimiento.component';

describe('MiEstablecimientoComponent', () => {
  let component: MiEstablecimientoComponent;
  let fixture: ComponentFixture<MiEstablecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiEstablecimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiEstablecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
