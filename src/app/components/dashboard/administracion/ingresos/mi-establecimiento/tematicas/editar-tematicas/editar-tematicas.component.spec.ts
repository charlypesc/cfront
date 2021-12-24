import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTematicasComponent } from './editar-tematicas.component';

describe('EditarTematicasComponent', () => {
  let component: EditarTematicasComponent;
  let fixture: ComponentFixture<EditarTematicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTematicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTematicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
