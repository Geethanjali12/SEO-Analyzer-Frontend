import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeoAnalyzerComponent } from './modules/seo-analyzer/seo-analyzer.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'seo-analyzer', component: SeoAnalyzerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
