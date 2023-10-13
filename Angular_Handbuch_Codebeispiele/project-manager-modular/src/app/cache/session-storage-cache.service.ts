import {AbstractCacheService} from './abstract-cache.service';

export class SessionStorageCacheService implements AbstractCacheService {
  private data: { [s: string]: any; } = {};

  put(key: string, value: any) {
    this.data[key] = value;
  }

  get(key: string): any {
    return this.data[key];
  }

  remove(key: string) {
    delete this.data[key];
  }
}
