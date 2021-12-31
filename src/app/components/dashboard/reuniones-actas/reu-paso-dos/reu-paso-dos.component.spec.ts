import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuPasoDosComponent } from './reu-paso-dos.component';

describe('ReuPasoDosComponent', () => {
  let component: ReuPasoDosComponent;
  let fixture: ComponentFixture<ReuPasoDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuPasoDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuPasoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
