import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BLOG_POSTS, BlogPost } from './blog-content';

@Component({
  selector: 'app-blog-article',
  standalone: false,
  templateUrl: './blog-article.html',
  styleUrl: './blog.css'
})
export class BlogArticle implements OnInit {
  post?: BlogPost;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.post = BLOG_POSTS.find((article) => article.slug === slug);
  }
}
