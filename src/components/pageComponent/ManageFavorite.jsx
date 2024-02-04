import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/giobal";

const AnimeFavorites = () => {
  const { favorites, addFavorite, removeFavorite } = useGlobalContext();
  const [favoritedAnimeIds, setFavoritedAnimeIds] = useState([]);

  useEffect(() => {
    setFavoritedAnimeIds(favorites.map((favorite) => favorite.id));
  }, [favorites, addFavorite, removeFavorite]);

  const handleAddFavorite = (animeId, imageUrl) => {
    addFavorite(animeId, imageUrl);
    setFavoritedAnimeIds((prevIds) => [...prevIds, animeId]);
  };

  const handleRemoveFavorite = (animeId) => {
    removeFavorite(animeId);
    setFavoritedAnimeIds((prevIds) => prevIds.filter((id) => id !== animeId));
  };

  return { favoritedAnimeIds, handleAddFavorite, handleRemoveFavorite };
};

export default AnimeFavorites;
