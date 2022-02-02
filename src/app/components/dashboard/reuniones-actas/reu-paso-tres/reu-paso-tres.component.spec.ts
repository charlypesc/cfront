import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuPasoTresComponent } from './reu-paso-tres.component';

describe('ReuPasoTresComponent', () => {
  let component: ReuPasoTresComponent;
  let fixture: ComponentFixture<ReuPasoTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuPasoTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuPasoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
