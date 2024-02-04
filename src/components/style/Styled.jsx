import { styled } from "@mui/material";

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const buttonStyles = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  height: "40px",
  background: "rgba(255, 255, 255, 0.7)",
  fontWeight: "medium",
};

export { StyledImage, buttonStyles };
