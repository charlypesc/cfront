import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTematicasComponent } from './ver-tematicas.component';

describe('VerTematicasComponent', () => {
  let component: VerTematicasComponent;
  let fixture: ComponentFixture<VerTematicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTematicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTematicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
