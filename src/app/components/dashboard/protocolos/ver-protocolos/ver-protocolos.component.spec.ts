import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProtocolosComponent } from './ver-protocolos.component';

describe('VerProtocolosComponent', () => {
  let component: VerProtocolosComponent;
  let fixture: ComponentFixture<VerProtocolosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerProtocolosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerProtocolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
