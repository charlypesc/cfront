import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBienvenidaComponent } from './panel-bienvenida.component';

describe('PanelBienvenidaComponent', () => {
  let component: PanelBienvenidaComponent;
  let fixture: ComponentFixture<PanelBienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelBienvenidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
