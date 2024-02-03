import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TvIcon from "@mui/icons-material/Tv";
import ScheduleIcon from "@mui/icons-material/Schedule";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    const path = location.pathname;

    if (path.includes("/popular")) {
      setValue(0);
    } else if (path.includes("/onair")) {
      setValue(1);
    } else if (path.includes("/upcoming")) {
      setValue(2);
    } else if (path.includes("/favorites")) {
      setValue(3);
    }
  }, [location.pathname]);
  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ width: "100%", backgroundColor: "#010307", py: 4 }}
      >
        <BottomNavigationAction
          label="Popular"
          icon={<WhatshotIcon />}
          sx={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }}
        />
        <BottomNavigationAction
          label="On Air"
          icon={<TvIcon />}
          sx={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }}
        />
        <BottomNavigationAction
          label="Upcoming"
          icon={<ScheduleIcon />}
          sx={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          sx={{ color: "pink", fontWeight: "bold", fontSize: "1.2rem" }}
        />
      </BottomNavigation>
    </Box>
  );
}
