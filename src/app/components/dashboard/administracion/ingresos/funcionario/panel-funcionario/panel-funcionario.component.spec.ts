import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelFuncionarioComponent } from './panel-funcionario.component';

describe('PanelFuncionarioComponent', () => {
  let component: PanelFuncionarioComponent;
  let fixture: ComponentFixture<PanelFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
