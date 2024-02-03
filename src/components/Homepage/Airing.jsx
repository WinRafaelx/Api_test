import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/giobal";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { StyledImage, buttonStyles } from "./Styled";

export default function Airing() {
  const {
    airingAnime,
    getAiringAnime,
    addFavorite,
    removeFavorite,
    favorites,
  } = useGlobalContext();

  const [favoritedAnimeIds, setFavoritedAnimeIds] = React.useState([]);

  useEffect(() => {
    getAiringAnime();
  }, [])

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

  const conditionalRender = () => {
    return airingAnime?.map((anime) => (
      <Grid
        item
        key={anime.mal_id}
        xs={12}
        sm={3}
        lg={2.5}
        sx={{ position: "relative", m: [1, 2, 3] }}
      >
        <Link to={`/anime/${anime.mal_id}`}>
          <StyledImage src={anime.images.jpg.large_image_url} alt="" />
        </Link>
        {favoritedAnimeIds.includes(anime.mal_id) ? (
          <Typography
            sx={{ ...buttonStyles, backgroundColor: "#E7F6C0" }}
            onClick={() => handleRemoveFavorite(anime.mal_id)}
          >
            Favorited ✔
          </Typography>
        ) : (
          <Typography
            sx={{ ...buttonStyles, cursor: "pointer" }}
            onClick={() => handleAddFavorite(anime.mal_id, anime.images.jpg.large_image_url)}
          >
            Add to Favorite
          </Typography>
        )}
      </Grid>
    ));
  };

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        width: "90%",
        mx: "auto",
      }}
    >
      {conditionalRender()}
    </Grid>
  );
}
