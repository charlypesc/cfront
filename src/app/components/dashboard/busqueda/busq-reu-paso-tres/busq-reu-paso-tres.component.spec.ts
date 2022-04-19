import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusqReuPasoTresComponent } from './busq-reu-paso-tres.component';

describe('BusqReuPasoTresComponent', () => {
  let component: BusqReuPasoTresComponent;
  let fixture: ComponentFixture<BusqReuPasoTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusqReuPasoTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusqReuPasoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
