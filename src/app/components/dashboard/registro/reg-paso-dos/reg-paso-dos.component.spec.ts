import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPasoDosComponent } from './reg-paso-dos.component';

describe('RegPasoDosComponent', () => {
  let component: RegPasoDosComponent;
  let fixture: ComponentFixture<RegPasoDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegPasoDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPasoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
