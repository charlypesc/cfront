import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionesActasComponent } from './reuniones-actas.component';

describe('ReunionesActasComponent', () => {
  let component: ReunionesActasComponent;
  let fixture: ComponentFixture<ReunionesActasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReunionesActasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunionesActasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
