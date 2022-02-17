import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoFuncionarioComponent } from './nuevo-funcionario.component';

describe('NuevoFuncionarioComponent', () => {
  let component: NuevoFuncionarioComponent;
  let fixture: ComponentFixture<NuevoFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
