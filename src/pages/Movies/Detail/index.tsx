import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Movies } from "../../../services/Movies";
import { IMovie } from "../../../typings";
import { DetailView } from "../../../components";

export const MovieDetail = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    if (title) {
      searchMovies();
    }
  }, [title]);

  const searchMovies = async () => {
    const data = await Movies.get(title || "");
    if (!data) {
      navigate("/not-found");
      return;
    }
    setMovie(data?.[0]);
  };

  return <>{movie ? <DetailView movie={movie} /> : <>Loading...</>}</>;
};
