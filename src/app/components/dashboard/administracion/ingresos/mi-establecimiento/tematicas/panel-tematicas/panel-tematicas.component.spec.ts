import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTematicasComponent } from './panel-tematicas.component';

describe('PanelTematicasComponent', () => {
  let component: PanelTematicasComponent;
  let fixture: ComponentFixture<PanelTematicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelTematicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTematicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
