import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoAnalyzerService } from 'src/app/shared/services/seo-analyzer.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { ViewportScroller } from "@angular/common";
@Component({
    selector: 'app-seo-analyzer',
    standalone: true,
    templateUrl: './seo-analyzer.component.html',
    styleUrls: ['./seo-analyzer.component.css'],
    imports: [CommonModule, FormsModule]
})
export class SeoAnalyzerComponent implements OnInit{
  public websiteUrl: string = '';
  public isProcessing: boolean = false;
  public analyzerList: any;
  public isLoader: boolean = false;
  @Input('id') productId ='';
  constructor(private seoAnalyzerService: SeoAnalyzerService, private toastr: ToastrService,
    private scroller: ViewportScroller){    
  }

  ngOnInit(): void {
    console.log('id', this.productId);
    
  }
  

  /**
   * Analyzes website
   */
  public analyzeWebsite = () => {
    this.isProcessing = true;
    this.isLoader = true;
    const params = {
      url: this.websiteUrl
    }    
    this.seoAnalyzerService.postSeoAnalyzer(params).subscribe({
      next: (response: any) => {
        this.isProcessing = false;
        this.isLoader = false;
        this.analyzerList = response.data;
        this.scrollDown();
        console.log('success', response.data);        
      },
      error: (error: any) => {  
        this.isProcessing = false; 
        this.isLoader = false;    
        this.toastr.danger(error.error.message);
      },
    });
  }

  scrollDown() {
    this.scroller.scrollToAnchor("seo-section");
  }
}
