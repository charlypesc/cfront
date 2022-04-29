import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMiProgramaComponent } from './editar-mi-programa.component';

describe('EditarMiProgramaComponent', () => {
  let component: EditarMiProgramaComponent;
  let fixture: ComponentFixture<EditarMiProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMiProgramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMiProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
