import { TestBed } from '@angular/core/testing';

import { CardCostumeService } from './card-costume.service';

describe('CardCostumeService', () => {
  let service: CardCostumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardCostumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
