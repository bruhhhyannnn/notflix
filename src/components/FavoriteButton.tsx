import { useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import { FavoriteButtonStyles } from "../css";

type FavoriteButtonProps = {
  movie: any;
  alwaysVisible?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function FavoriteButton({ movie, alwaysVisible = false, className, ...props }: FavoriteButtonProps) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const [showOverlay, setShowOverlay] = useState(false);
  const [showOverlayMessage, setShowOverlayMessage] = useState("");

  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    setShowOverlay(true);

    if (favorite) {
      removeFromFavorites(movie.id);
      setShowOverlayMessage("Removed");
    } else {
      addToFavorites(movie);
      setShowOverlayMessage("Added");
    }

    setTimeout(() => setShowOverlay(false), 2000);
  }

  return (
    <>
      <div className={`${FavoriteButtonStyles.addedFavoriteOverlay} ${showOverlay ? FavoriteButtonStyles.visible : ""}`}>
        <p className={FavoriteButtonStyles.favoriteText}>♥</p>
        <p className={FavoriteButtonStyles.textMessage}>{showOverlayMessage} to your Favorites!</p>
      </div>

      <button
        {...props}
        onClick={onFavoriteClick}
        className={`${FavoriteButtonStyles.favoriteButton} ${favorite ? FavoriteButtonStyles.active : ""} ${alwaysVisible ? FavoriteButtonStyles.alwaysVisible : ""} ${className || ""}`}
      >
        ♥
      </button>
    </>
  );
}
