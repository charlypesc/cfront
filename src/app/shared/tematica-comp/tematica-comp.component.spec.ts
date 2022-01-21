import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TematicaCompComponent } from './tematica-comp.component';

describe('TematicaCompComponent', () => {
  let component: TematicaCompComponent;
  let fixture: ComponentFixture<TematicaCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TematicaCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TematicaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
