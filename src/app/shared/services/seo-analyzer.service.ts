import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeoAnalyzerService {

  constructor(private http: HttpClient) { }

  /**
   * Posts seo analyzer
   * @param url 
   * @returns  
   */
  public postSeoAnalyzer(url: any) {
    return this.http.post(`${environment.API_BASE_URL}analyze`, url);
  }
}
