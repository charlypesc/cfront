import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusqTabSeguiComponent } from './busq-tab-segui.component';

describe('BusqTabSeguiComponent', () => {
  let component: BusqTabSeguiComponent;
  let fixture: ComponentFixture<BusqTabSeguiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusqTabSeguiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusqTabSeguiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
