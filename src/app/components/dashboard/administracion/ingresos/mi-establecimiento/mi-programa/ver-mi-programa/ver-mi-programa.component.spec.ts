import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMiProgramaComponent } from './ver-mi-programa.component';

describe('VerMiProgramaComponent', () => {
  let component: VerMiProgramaComponent;
  let fixture: ComponentFixture<VerMiProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMiProgramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMiProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
