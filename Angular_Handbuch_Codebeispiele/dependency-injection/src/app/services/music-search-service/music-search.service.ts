import { Injectable } from '@angular/core';
import { Item, SearchService } from '../search-service/search.service';
import { albums } from './albums';
import {MusicItem} from "./music-item";


@Injectable()
export class MusicSearchService implements SearchService<MusicItem> {

  items: MusicItem[] = [];
  constructor() {
    this.items = albums;
  }


  getAll() {
    console.log('GET ALL', this.items);
    return this.items;
  }

  search(keyword: string): MusicItem[] {
    return this.items.filter((item) => {
      return item.title.startsWith(keyword);
    });
  }



}
