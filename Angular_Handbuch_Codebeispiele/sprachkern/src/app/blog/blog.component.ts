import { Component } from '@angular/core';
import { BlogEntry } from './blog-entry';

@Component({
  selector: 'ch-blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.css'],
})
export class BlogComponent {

  entries: BlogEntry[] = [];

  constructor() {
    this.entries = [{
      title: 'Angular 13 erschienen',
      image: '/assets/angular.png',
      text: 'Die neue Version wartet mit einigen interessanten Features und mit deutlichen Performance-Verbesserungen auf...'
    },
    {
      title: 'ECMAScript 2021 Standard veröffentlicht',
      image: '/assets/ecmascript-logo.jpeg',
      text: 'Mit der Funktion String.replaceAll enthält der ECMAScript 2021 Standard eine Neuerung, auf die viele Entwickler wohl schon lange sehnsüchtig gewartet haben.'
    }];
  }

  saveEntry(entry: BlogEntry) {
    this.entries = [...this.entries, entry];
  }
}
