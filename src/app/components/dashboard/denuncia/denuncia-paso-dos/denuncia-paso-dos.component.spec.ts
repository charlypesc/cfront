import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaPasoDosComponent } from './denuncia-paso-dos.component';

describe('DenunciaPasoDosComponent', () => {
  let component: DenunciaPasoDosComponent;
  let fixture: ComponentFixture<DenunciaPasoDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenunciaPasoDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciaPasoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
