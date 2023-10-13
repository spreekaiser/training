import { Injectable } from '@angular/core';
import {Item, SearchService} from '../search-service/search.service';
import { videos } from './videos';

@Injectable()
export class VideoSearchService implements SearchService<Item> {

  videos: any[];

  constructor() {
    this.videos = videos;
  }

  getAll(): any[] {
    return this.videos;
  }

  search(keyword: string): any[] {
    return this.videos.filter((video) => video.Title.includes(keyword));
  }

}
