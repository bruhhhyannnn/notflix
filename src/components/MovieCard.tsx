import FavoriteButton from "./FavoriteButton";
import { MovieCardStyles } from "../css";
import type { Movie } from "../types";

type MovieCardProps = {
  movie: Movie;
  showFavoriteButton?: boolean;
};

export default function MovieCard({ movie, showFavoriteButton = false }: MovieCardProps) {
  return (
    <div className={MovieCardStyles.movieCard}>
      <div className={MovieCardStyles.moviePoster}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title}`} className={MovieCardStyles.image} />
        <div className={MovieCardStyles.movieOverlay}>
          <FavoriteButton movie={movie} className={MovieCardStyles.favoriteButton} alwaysVisible={showFavoriteButton} />
        </div>
      </div>
      <div className={MovieCardStyles.movieInfo}>
        <p className={MovieCardStyles.title}>{movie.title}</p>
        <p className={MovieCardStyles.releaseDate}>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}
