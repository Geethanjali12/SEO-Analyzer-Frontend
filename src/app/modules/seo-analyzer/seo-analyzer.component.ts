import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoAnalyzerService } from 'src/app/shared/services/seo-analyzer.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
    selector: 'app-seo-analyzer',
    standalone: true,
    templateUrl: './seo-analyzer.component.html',
    styleUrls: ['./seo-analyzer.component.css'],
    imports: [CommonModule, FormsModule]
})
export class SeoAnalyzerComponent {
  public websiteUrl: string = '';

  constructor(private seoAnalyzerService: SeoAnalyzerService, private toastr: ToastrService){    
  }

  /**
   * Analyzes website
   */
  public analyzeWebsite = () => {
    const params = {
      url: this.websiteUrl
    }    
    this.seoAnalyzerService.postSeoAnalyzer(params).subscribe({
      next: (response: any) => {
        console.log('res', response);
        this.toastr.success('success');
      },
      error: (error: any) => {
        console.log('error', error.error.error);
        this.toastr.danger(error.error.error);
      },
    });
  }
}
