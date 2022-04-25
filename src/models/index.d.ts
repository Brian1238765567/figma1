import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MovieMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Movie {
  readonly id: string;
  readonly RTscore?: string | null;
  readonly MCscore?: string | null;
  readonly IMDbscore?: string | null;
  readonly Name?: string | null;
  readonly image_url?: string | null;
  readonly Wikiurl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Movie, MovieMetaData>);
  static copyOf(source: Movie, mutator: (draft: MutableModel<Movie, MovieMetaData>) => MutableModel<Movie, MovieMetaData> | void): Movie;
}

export declare class Home {
  readonly id: string;
  readonly adress?: string | null;
  readonly price?: number | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Home, HomeMetaData>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}