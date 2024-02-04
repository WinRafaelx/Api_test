import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/giobal";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { StyledImage, buttonStyles } from "../style/Styled";
import AnimeFavorites from "./ManageFavorite";

export default function Airing() {
  const {
    airingAnime,
    getAiringAnime,
  } = useGlobalContext();

  const { favoritedAnimeIds, handleAddFavorite, handleRemoveFavorite } = AnimeFavorites();

  useEffect(() => {
    getAiringAnime();
  }, [])

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
            sx={{ ...buttonStyles, backgroundColor: "#F2BDCB" }}
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
