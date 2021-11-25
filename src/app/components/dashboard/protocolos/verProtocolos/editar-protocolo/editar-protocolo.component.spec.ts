import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProtocoloComponent } from './editar-protocolo.component';

describe('EditarProtocoloComponent', () => {
  let component: EditarProtocoloComponent;
  let fixture: ComponentFixture<EditarProtocoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProtocoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProtocoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
