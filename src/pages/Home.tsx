import { useState, useEffect } from "react";
import { MovieCard } from "../components/";
import { Section } from "../components/ui";
import { HomeStyles } from "../css";
import { getPopularMovies, searchMovies } from "../services/api.ts";
import { motion } from "framer-motion";
import { MagnifyingGlass } from "@phosphor-icons/react";
import type { Movie } from "../types";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
        setError("");
      } catch (err) {
        console.log(err);
        setError("Failed to load movies ...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError("");
    } catch (err) {
      console.log(err);
      setError("Failed to search movies ...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section>
      <div className={HomeStyles.container}>
        <div className={HomeStyles.headingContainer}>
          <div className={HomeStyles.header}>
            <h1 className={HomeStyles.heading}>Discover the Latest Movies</h1>
            <p className={HomeStyles.subheading}>Browse different category of movies in one website!</p>
          </div>
          <div className={HomeStyles.searchContainer}>
            <form onSubmit={handleSearch} className={HomeStyles.searchForm}>
              <label htmlFor="searchMovie" className={HomeStyles.inputContainer}>
                <MagnifyingGlass size={24} weight="fill" style={{ color: "var(--neutral-color-400)" }} />
                <input
                  type="text"
                  className={HomeStyles.searchInput}
                  id="searchMovie"
                  name="searchMovie"
                  placeholder="Search for movies!"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </label>
              <button type="submit" className={HomeStyles.searchButton}>
                Search
              </button>
            </form>
          </div>
        </div>

        <div className={HomeStyles.movieContainer}>
          <h3>Trending Movies</h3>
          <div className={HomeStyles.movieWrapper}>
            {error && (
              <div className={HomeStyles.errorMessage}>
                <p>Something went wrong!</p>
                <p>{error}</p>
              </div>
            )}
            {loading ? (
              <div className={HomeStyles.loading}>
                <p>Loading ...</p>
              </div>
            ) : (
              <div className={HomeStyles.movieGrid}>
                {movies.map((movieData: Movie) => (
                  <motion.div key={movieData.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
                    <MovieCard movie={movieData} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
