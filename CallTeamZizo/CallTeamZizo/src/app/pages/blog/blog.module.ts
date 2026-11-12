import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Blog } from './blog';
import { BlogArticle } from './blog-article';

@NgModule({
  declarations: [Blog, BlogArticle],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: Blog },
      { path: ':slug', component: BlogArticle }
    ])
  ]
})
export class BlogModule { }
