import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProtocolosComponent } from './editar-protocolos.component';

describe('EditarProtocolosComponent', () => {
  let component: EditarProtocolosComponent;
  let fixture: ComponentFixture<EditarProtocolosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProtocolosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProtocolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
