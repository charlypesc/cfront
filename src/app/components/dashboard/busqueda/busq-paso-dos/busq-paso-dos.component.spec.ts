import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusqPasoDosComponent } from './busq-paso-dos.component';

describe('BusqPasoDosComponent', () => {
  let component: BusqPasoDosComponent;
  let fixture: ComponentFixture<BusqPasoDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusqPasoDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusqPasoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
