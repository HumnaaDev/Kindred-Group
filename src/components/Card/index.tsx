import { FC } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { CardWrapper } from "./MovieCard.style";
import { IMovie } from "../../typings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import moviePlaceholder from "../../assets/images/moviePlaceholder.jpg";
import { isFavorite, markFavorite } from "../../utils";
import { Action } from "../../constants/enum";
import { useLocalStorage } from "../../utils/useLocalStorage";
import { DEFAULT_FAV_MOVIES_KEY } from "../../constants";

interface IMovieCardProps {
  movie: IMovie;
  onMovieClick: (id: string | undefined) => void;
}

export const MovieCard: FC<IMovieCardProps> = ({ movie, onMovieClick }) => {
  const { favMovies, setValue } = useLocalStorage(DEFAULT_FAV_MOVIES_KEY);
  const isFavoriteMovie = isFavorite(favMovies, movie);

  const handleFavoriteClick = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    const favoriteMovies = markFavorite(
      favMovies,
      movie,
      isFavoriteMovie ? Action.REMOVE : Action.ADD,
    );
    setValue(favoriteMovies);
  };

  return (
    <CardWrapper className="card-container">
      <Card
        className="card"
        data-testid="movie-card"
        onClick={() => onMovieClick(movie.Title)}
      >
        <CardMedia
          className="card-media"
          component="img"
          alt={movie.Title}
          image={movie.Poster === "N/A" ? moviePlaceholder : movie.Poster}
          title={movie.Title}
        />
        <CardContent>
          <Typography className="card-name" component="div">
            {movie.Title}
          </Typography>
          <Box className="text-div">
            <Typography className="card-text" color="textSecondary">
              {movie.Year}
            </Typography>
            <FavoriteIcon
              className={`${isFavoriteMovie && "selected"}`}
              onClick={handleFavoriteClick}
            />
          </Box>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};
