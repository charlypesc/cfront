import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisReusComponent } from './mis-reus.component';

describe('MisReusComponent', () => {
  let component: MisReusComponent;
  let fixture: ComponentFixture<MisReusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisReusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisReusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
