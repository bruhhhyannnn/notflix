import { Section } from "../components/ui";
import { useParams } from "react-router";
import { fetchMovie } from "../services/api.ts";
import { useEffect, useState } from "react";
import { MovieDetailsStyles } from "../css";
import { FavoriteButton } from "../components";
import type { Movie } from "../types.ts";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!movieId) {
      setError("Movie not found.");
      setLoading(false);
      return;
    }

    const loadMovie = async () => {
      try {
        const movie = await fetchMovie(movieId);
        setMovie(movie);
        setError("");
      } catch (_) {
        setError("Failed to load movie. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [movieId]);

  // TODO: change state management with a one shared component later on
  if (loading) return <Section>Loading movie details ...</Section>;
  if (error) return <Section>{error}</Section>;
  if (!movie) return <Section>No movie found.</Section>;

  return (
    <Section>
      <div className={MovieDetailsStyles.content}>
        <div className={MovieDetailsStyles.movieBackdrop}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={`${movie.title}`} className={MovieDetailsStyles.backdropImage} />
          <div className={MovieDetailsStyles.favoriteButtonOverlay}>
            <FavoriteButton movie={movie} className={MovieDetailsStyles.favoriteButton} alwaysVisible={true} />
          </div>
        </div>
        <div className={MovieDetailsStyles.movieInfo}>
          <div className={MovieDetailsStyles.moviePoster}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title}`} className={MovieDetailsStyles.posterImage} />
          </div>
          <div className={MovieDetailsStyles.movieInfoContent}>
            <p className={MovieDetailsStyles.title}>{movie.title}</p>
            <div className={MovieDetailsStyles.titleAndReleaseDateContainer}>
              <p>Release Date: </p>
              <p>{movie.release_date}</p>
            </div>
            <div className={MovieDetailsStyles.popularityContainer}>
              <p>Popularity: </p>
              <p>{movie.popularity}</p>
            </div>
            <div className={MovieDetailsStyles.voteCountContainer}>
              <p>Vote Count: </p>
              <p>{movie.vote_count}</p>
            </div>
            <div className={MovieDetailsStyles.voteAverageContainer}>
              <p>Vote Average: </p>
              <p>{movie.vote_average}</p>
            </div>
          </div>
        </div>
        <div className={MovieDetailsStyles.movieOverview}>
          <p className={MovieDetailsStyles.releaseDate}>{movie.overview}</p>
        </div>
      </div>
    </Section>
  );
}
