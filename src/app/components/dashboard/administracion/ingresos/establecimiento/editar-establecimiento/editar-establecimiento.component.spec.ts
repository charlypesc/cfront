import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEstablecimientoComponent } from './editar-establecimiento.component';

describe('EditarEstablecimientoComponent', () => {
  let component: EditarEstablecimientoComponent;
  let fixture: ComponentFixture<EditarEstablecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEstablecimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEstablecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
