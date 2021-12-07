import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaPasoUnoComponent } from './denuncia-paso-uno.component';

describe('DenunciaPasoUnoComponent', () => {
  let component: DenunciaPasoUnoComponent;
  let fixture: ComponentFixture<DenunciaPasoUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenunciaPasoUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciaPasoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
