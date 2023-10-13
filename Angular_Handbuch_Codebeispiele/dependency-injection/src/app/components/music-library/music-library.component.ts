import {Component} from '@angular/core';
import {MusicSearchService} from '../../services/music-search-service/music-search.service';
import { Item, SearchService } from '../../services/search-service/search.service';
import {MusicItem} from "../../services/music-search-service/music-item";

@Component({
  selector: 'ch-music-library',
  viewProviders: [{provide: SearchService, useClass: MusicSearchService }],
  templateUrl: 'music-library.component.html'
})
export class MusicLibraryComponent {
  items: MusicItem[] = [];
  constructor(private searchService: SearchService<MusicItem>) {
    this.items = this.searchService.getAll();
  }

}
