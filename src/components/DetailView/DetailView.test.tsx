import { render, screen } from '@testing-library/react';
import { DetailView } from './index';
import { IMovie } from '../../typings';

const mockMovie: IMovie = {
  imdbID: 1,
  Title: "Movie 1",
  Year: "2022",
  Type: "movie",
  Poster: "poster_url_1",
}

describe('DetailView Component', () => {
  it('renders the movie details correctly', () => {
    const { getByText } = render(<DetailView movie={mockMovie} />);

    expect(getByText(/Movie Title:/i)).toBeInTheDocument();
    expect(getByText(/Movie 1/i)).toBeInTheDocument();

    const movieImage = screen.getByAltText(mockMovie.Title);
    expect(movieImage).toBeInTheDocument();
    expect(movieImage).toHaveAttribute('src', mockMovie.Poster);
  });

  it('renders a placeholder image when Poster is "N/A"', () => {
    const movieWithPlaceholder = { ...mockMovie, Poster: 'N/A' };
    render(<DetailView movie={movieWithPlaceholder} />);

    const placeholderImage = screen.getByAltText(mockMovie.Title);
    expect(placeholderImage).toBeInTheDocument();
    expect(placeholderImage).toHaveAttribute('src', 'moviePlaceholder.jpg'); 
  });
});
