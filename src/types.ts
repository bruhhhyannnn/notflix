export type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  backdrop_path: string | null;
  popularity: number;
  overview: string;
  genre_ids: number[];
  vote_average: number;
  vote_count: number;
};
