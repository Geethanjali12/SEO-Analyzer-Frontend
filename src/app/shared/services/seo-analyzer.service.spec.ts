import { TestBed } from '@angular/core/testing';

import { SeoAnalyzerService } from './seo-analyzer.service';

describe('SeoAnalyzerService', () => {
  let service: SeoAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
