import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoAnalyzerComponent } from './seo-analyzer.component';

describe('SeoAnalyzerComponent', () => {
  let component: SeoAnalyzerComponent;
  let fixture: ComponentFixture<SeoAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SeoAnalyzerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
