import { Typography } from "@mui/material";
import { NotFoundWrapper } from "./NotFound.style";

export const NotFound = () => {
  return (
    <NotFoundWrapper className="not-found">
      <Typography variant="h1" className="title">
        Page Not Found
      </Typography>
      <img
        src="https://via.placeholder.com/400"
        alt="Not Found"
        className="image"
      />
      <Typography variant="body1">
        Sorry, the page you are looking for might be in another castle.
      </Typography>
    </NotFoundWrapper>
  );
};
