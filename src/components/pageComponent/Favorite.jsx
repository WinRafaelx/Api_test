import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/giobal";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { StyledImage, buttonStyles } from "../style/Styled";

export default function Favorite() {
  const { favorites, removeFavorite } = useGlobalContext();
  const [favortieAnimeContent, setFavortieAnimeContent] = useState(favorites);

  useEffect(() => {
    // Check if favorites is defined before setting the state
    if (favorites) {
      setFavortieAnimeContent(favorites);
    }
  }, [favorites]);

  const handleRemoveFavorite = (animeId) => {
    setFavortieAnimeContent((prevContent) =>
      prevContent.filter((anime) => anime.id !== animeId)
    );
    removeFavorite(animeId);
  };

  const conditionalRender = () => {
    return favortieAnimeContent.map((anime) => (
      <Grid
        item
        key={anime.id}
        xs={12}
        sm={3}
        lg={2.5}
        sx={{ position: "relative", m: [1, 2, 3] }}
      >
        <Link to={`/anime/${anime.id}`}>
          <StyledImage src={anime.img} alt="" />
        </Link>

        <Typography
          sx={{ ...buttonStyles, backgroundColor: "#F2BDCB" }}
          onClick={() => handleRemoveFavorite(anime.id)}
        >
          Favorited ✔
        </Typography>
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
