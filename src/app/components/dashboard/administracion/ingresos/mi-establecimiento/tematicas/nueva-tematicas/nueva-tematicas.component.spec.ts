import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTematicasComponent } from './nueva-tematicas.component';

describe('NuevaTematicasComponent', () => {
  let component: NuevaTematicasComponent;
  let fixture: ComponentFixture<NuevaTematicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaTematicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaTematicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
