import type { Movie } from "../types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMovieContext } from "../contexts/MovieContext";
import { Section } from "../components/ui";
import { MovieCard } from "../components/";
import { FavoritesStyles } from "../css";

export default function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length == 0) {
    return (
      <Section>
        <div className={FavoritesStyles.header}>
          <h3 className={FavoritesStyles.heading}>
            You have no <span className={FavoritesStyles.favoriteColor}>Favorite</span> Movies
          </h3>
          <p className={FavoritesStyles.subheading}>
            Start adding your favorite movies in the{" "}
            <Link to="/" className={FavoritesStyles.link}>
              home
            </Link>{" "}
            page.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <div className={FavoritesStyles.movieContainer}>
        <div className={FavoritesStyles.header}>
          <h3>Your Favorite Movies!</h3>
          <p className={FavoritesStyles.subheading}>A collection of movies you’ve marked as favorites.</p>
        </div>
        <div className={FavoritesStyles.movieGrid}>
          {favorites.map((movieData: Movie) => (
            <motion.div key={movieData.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
              <MovieCard movie={movieData} showFavoriteButton />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
