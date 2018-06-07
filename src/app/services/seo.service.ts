import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) { }

  config(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe(event => {
        this.setTitle(event['title']);

        if (event['meta']) {
          this.setMeta(event['meta']);
        }
      });
  }

  setTitle(titleName: string): void {
    this.title.setTitle(titleName);
  }

  setMeta(metaTags: any): void {
    if (metaTags.keywords) {
      const keywords: MetaDefinition = { name: 'keywords', content: metaTags.keywords };
      this.meta.updateTag(keywords);
    }

    if (metaTags.description) {
      const description: MetaDefinition = { name: 'description', content: metaTags.description };
      this.meta.updateTag(description);
    }
  }
}
