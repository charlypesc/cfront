import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutManualComponent } from './rut-manual.component';

describe('RutManualComponent', () => {
  let component: RutManualComponent;
  let fixture: ComponentFixture<RutManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutManualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
