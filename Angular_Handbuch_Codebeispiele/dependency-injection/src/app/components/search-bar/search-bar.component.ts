import { Component, Inject, Host, Output, EventEmitter } from '@angular/core';
import { Item, SearchService } from '../../services/search-service/search.service';


@Component({
  selector: 'ch-search-bar',
  template: `
    <label>Suche</label>
    <input type="text" #query (keyup.enter)="search(query.value)" />
    <button (click)="search(query.value)">Suchen</button>`,
})
export class SearchBarComponent<T> {
  @Output() searchResultChanged = new EventEmitter<T[]>();

  constructor(@Host() @Inject(SearchService) private searchService: SearchService<T>) {
    this.searchResultChanged.emit(searchService.getAll());
  }
  search(searchQuery: string) {
    this.searchResultChanged.emit(this.searchService.search(searchQuery));
  }
}
