import { FC } from "react";
import { Grid, Typography, Card } from "@mui/material";
import { DetailViewWrapper } from "./DetailView.style";
import { IMovie } from "../../typings";
import MoviePlaceholder from "../../assets/images/moviePlaceholder.jpg";

type IDetailViewProps = { movie: IMovie };

export const DetailView: FC<IDetailViewProps> = ({ movie }) => {
  return (
    <DetailViewWrapper className="detail-view-container">
      <Card className="detail-card">
        <Grid className="movie-image-wrapper">
          <img
            className="movie-image"
            src={movie.Poster === "N/A" ? MoviePlaceholder : movie.Poster}
            alt={movie.Title}
          />
        </Grid>
        <Grid className="movie-detail">
          <Typography className="heading" gutterBottom>
            Movie Title: <span className="bold">{movie.Title}</span>
          </Typography>
          <Typography variant="body1">
            Release Year: <span className="bold">{movie.Year}</span>
          </Typography>
        </Grid>
      </Card>
    </DetailViewWrapper>
  );
};
