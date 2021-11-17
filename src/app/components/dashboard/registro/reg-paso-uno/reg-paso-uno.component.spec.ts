import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPasoUnoComponent } from './reg-paso-uno.component';

describe('RegPasoUnoComponent', () => {
  let component: RegPasoUnoComponent;
  let fixture: ComponentFixture<RegPasoUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegPasoUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPasoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
