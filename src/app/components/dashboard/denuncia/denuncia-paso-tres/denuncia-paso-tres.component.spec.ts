import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaPasoTresComponent } from './denuncia-paso-tres.component';

describe('DenunciaPasoTresComponent', () => {
  let component: DenunciaPasoTresComponent;
  let fixture: ComponentFixture<DenunciaPasoTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenunciaPasoTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciaPasoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
