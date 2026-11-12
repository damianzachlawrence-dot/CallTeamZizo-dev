import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { SiteHeader } from './shared/site-header';
import { SiteFooter } from './shared/site-footer';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [App, SiteHeader, SiteFooter]
    }).compileComponents();
  });

  it('creates the Call Team Zizo application shell', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    expect(fixture.componentInstance).toBeTruthy();
    expect(root.querySelector('app-site-header')).toBeTruthy();
    expect(root.querySelector('app-site-footer')).toBeTruthy();
  });
});
