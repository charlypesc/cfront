import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuPasoUnoComponent } from './reu-paso-uno.component';

describe('ReuPasoUnoComponent', () => {
  let component: ReuPasoUnoComponent;
  let fixture: ComponentFixture<ReuPasoUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuPasoUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuPasoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
