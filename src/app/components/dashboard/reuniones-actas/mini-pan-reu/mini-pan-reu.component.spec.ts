import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniPanReuComponent } from './mini-pan-reu.component';

describe('MiniPanReuComponent', () => {
  let component: MiniPanReuComponent;
  let fixture: ComponentFixture<MiniPanReuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniPanReuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniPanReuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
