import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TvIcon from "@mui/icons-material/Tv";
import ScheduleIcon from "@mui/icons-material/Schedule";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (route) =>
    route === "/" ? location.pathname === route : location.pathname.startsWith(route);

  return (
    <Box>
      <BottomNavigation
        showLabels
        sx={{ width: "100%", backgroundColor: "#010307", py: 4 }}
      >
        <BottomNavigationAction
          label="Popular"
          icon={<WhatshotIcon />}
          sx={{
            color: isActive("/") ? "#3A7ED2" : "white",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          label="On Air"
          icon={<TvIcon />}
          sx={{
            color: isActive("/airing") ? "#3A7ED2" : "white",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
          onClick={() => navigate("/airing")}
        />
        <BottomNavigationAction
          label="Upcoming"
          icon={<ScheduleIcon />}
          sx={{
            color: isActive("/upcoming") ? "#3A7ED2" : "white",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
          onClick={() => navigate("/upcoming")}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          sx={{
            color: isActive("/favorites") ? "#3A7ED2" : "pink",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
          onClick={() => navigate("/favorites")}
        />
      </BottomNavigation>
    </Box>
  );
}
