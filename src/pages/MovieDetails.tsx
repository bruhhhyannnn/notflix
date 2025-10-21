import { Section } from "../components/ui";
import { useParams } from "react-router";
import { fetchMovie } from "../services/api.ts";
import { useEffect, useState } from "react";
import { MovieDetailsStyles } from "../css";
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
      <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={`${movie.title}`} className={MovieDetailsStyles.backdropImage} />
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title}`} className={MovieDetailsStyles.posterImage} />
      <p className={MovieDetailsStyles.title}>{movie.title}</p>
      <p>{movie.release_date}</p>
      <p>{movie.popularity}</p>
      <p>{movie.vote_average}</p>
      <p>{movie.vote_count}</p>
      <p className={MovieDetailsStyles.releaseDate}>{movie.overview}</p>
    </Section>
  );
}
