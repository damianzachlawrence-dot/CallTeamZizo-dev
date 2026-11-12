import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SiteHeader } from './shared/site-header';
import { SiteFooter } from './shared/site-footer';

@NgModule({
  declarations: [App, SiteHeader, SiteFooter],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App]
})
export class AppModule { }
