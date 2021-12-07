import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaBuscadorComponent } from './denuncia-buscador.component';

describe('DenunciaBuscadorComponent', () => {
  let component: DenunciaBuscadorComponent;
  let fixture: ComponentFixture<DenunciaBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenunciaBuscadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciaBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
