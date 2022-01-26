import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocoloCompComponent } from './protocolo-comp.component';

describe('ProtocoloCompComponent', () => {
  let component: ProtocoloCompComponent;
  let fixture: ComponentFixture<ProtocoloCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtocoloCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocoloCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
