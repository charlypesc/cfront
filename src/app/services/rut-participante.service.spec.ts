import { TestBed } from '@angular/core/testing';

import { RutParticipanteService } from './rut-participante.service';

describe('RutParticipanteService', () => {
  let service: RutParticipanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutParticipanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
