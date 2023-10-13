export interface Item {
  img?: string;
  title?: string;
  artist?: string;
  poster?: string;
  genre?: string;
  releaseYear?: string;
}

export abstract class SearchService<T> {
  abstract getAll(): T[];
  abstract search(term: string): T[];
}
