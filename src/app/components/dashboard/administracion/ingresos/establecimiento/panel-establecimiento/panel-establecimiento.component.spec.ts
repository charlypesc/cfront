import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelEstablecimientoComponent } from './panel-establecimiento.component';

describe('PanelEstablecimientoComponent', () => {
  let component: PanelEstablecimientoComponent;
  let fixture: ComponentFixture<PanelEstablecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelEstablecimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelEstablecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
