import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarSeguimientoComponent } from './ingresar-seguimiento.component';

describe('IngresarSeguimientoComponent', () => {
  let component: IngresarSeguimientoComponent;
  let fixture: ComponentFixture<IngresarSeguimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarSeguimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
