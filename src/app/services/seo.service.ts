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
    const ogTitle: MetaDefinition = { property: 'og:title', content: titleName };
    const twitterTitle: MetaDefinition = { name: 'twitter:title', content: titleName };
    const googleTitle: MetaDefinition = { itemprop: 'name', content: titleName };
    this.meta.removeTag('itemprop="name"');
    this.meta.updateTag(ogTitle);
    this.meta.updateTag(twitterTitle);
    this.meta.updateTag(googleTitle);
  }

  setMeta(metaTags: any): void {
    if (metaTags.keywords) {
      const keywords: MetaDefinition = { name: 'keywords', content: metaTags.keywords };
      this.meta.updateTag(keywords);
    }

    if (metaTags.description) {
      const description: MetaDefinition = { name: 'description', content: metaTags.description };
      const ogDescription: MetaDefinition = { property: 'og:description', content: metaTags.description };
      const twitterDescription: MetaDefinition = { name: 'twitter:description', content: metaTags.description };
      const googleDescription: MetaDefinition = { itemprop: 'description', content: metaTags.description };
      this.meta.removeTag('itemprop="description"');
      this.meta.updateTag(description);
      this.meta.updateTag(ogDescription);
      this.meta.updateTag(twitterDescription);
      this.meta.updateTag(googleDescription);
    }

    if (metaTags.type) {
      const ogType: MetaDefinition = { property: 'og:type', content: metaTags.type };
      this.meta.updateTag(ogType);
    }

    if (metaTags.card) {
      const twitterCard: MetaDefinition = { name: 'twitter:card', content: metaTags.card };
      this.meta.updateTag(twitterCard);
    }

    if (metaTags.image) {
      const ogImage: MetaDefinition = { property: 'og:image', content: metaTags.image };
      const twitterImage: MetaDefinition = { name: 'twitter:image', content: metaTags.image };
      const googleImage: MetaDefinition = { itemprop: 'image', content: metaTags.image };
      this.meta.removeTag('itemprop="image"');
      this.meta.updateTag(ogImage);
      this.meta.updateTag(twitterImage);
      this.meta.updateTag(googleImage);
    }

    if (metaTags.url) {
      const ogUrl: MetaDefinition = { property: 'og:url', content: metaTags.url };
      const twitterUrl: MetaDefinition = { name: 'twitter:url', content: metaTags.url };
      this.meta.updateTag(ogUrl);
      this.meta.updateTag(twitterUrl);
    }

    if (metaTags.author) {
      const author: MetaDefinition = { name: 'author', content: metaTags.author };
      this.meta.updateTag(author);
    }
  }
}
