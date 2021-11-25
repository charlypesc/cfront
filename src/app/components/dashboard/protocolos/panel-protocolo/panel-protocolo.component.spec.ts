import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelProtocoloComponent } from './panel-protocolo.component';

describe('PanelProtocoloComponent', () => {
  let component: PanelProtocoloComponent;
  let fixture: ComponentFixture<PanelProtocoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelProtocoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelProtocoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
