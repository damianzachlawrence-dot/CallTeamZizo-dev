import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./pages/home/home.module').then((module) => module.HomeModule), title: 'Call Team Zizo | Websites, chatbots & AI receptionists' },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then((module) => module.AboutModule), title: 'About | Call Team Zizo' },
  { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then((module) => module.ContactModule), title: 'Contact | Call Team Zizo' },
  { path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then((module) => module.BlogModule), title: 'Blog | Call Team Zizo' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
