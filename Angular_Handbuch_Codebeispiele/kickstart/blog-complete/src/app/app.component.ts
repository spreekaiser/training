import { Component } from '@angular/core';
import { initialEntries } from './models/initialEntries';
import { BlogEntry } from './models/blog-entry';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  entries: Array<BlogEntry> = [];

  constructor() {
    this.entries = initialEntries;
  }

  createBlogEntry(title: string, image: string, text: string) {
    const entry = new BlogEntry();
    entry.title = title;
    entry.image = image;
    entry.text = text;
    this.entries.push(entry);
  }
}
