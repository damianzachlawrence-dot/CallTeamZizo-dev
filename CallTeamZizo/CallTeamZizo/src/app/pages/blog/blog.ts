import { Component } from '@angular/core';
import { BLOG_POSTS } from './blog-content';

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
  readonly posts = BLOG_POSTS;
}
