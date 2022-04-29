import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoMiProgramaComponent } from './nuevo-mi-programa.component';

describe('NuevoMiProgramaComponent', () => {
  let component: NuevoMiProgramaComponent;
  let fixture: ComponentFixture<NuevoMiProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoMiProgramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoMiProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
