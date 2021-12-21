import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaDomicialiariaComponent } from './visita-domicialiaria.component';

describe('VisitaDomicialiariaComponent', () => {
  let component: VisitaDomicialiariaComponent;
  let fixture: ComponentFixture<VisitaDomicialiariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitaDomicialiariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitaDomicialiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
