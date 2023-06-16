import { TestBed } from '@angular/core/testing';

import { GeneratorMlService } from './generator-ml.service';

describe('GeneratorMlService', () => {
  let service: GeneratorMlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratorMlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
