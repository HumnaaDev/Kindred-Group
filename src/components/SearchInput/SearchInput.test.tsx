import { render, screen, fireEvent } from "@testing-library/react";
import { SearchInput } from "./index";
import { IMovie } from "../../typings";

describe("AutocompleteSearch Component", () => {
  jest.mock("lodash.debounce", () => (fn: any) => fn);

  const setMovieTitle = jest.fn();

  const mockMovies = [
    {
      imdbID: 1,
      Title: "Movie 1",
      Year: "2022",
      Type: "movie",
      Poster: "poster_url_1",
    },
    {
      imdbID: 2,
      Title: "Movie 2",
      Year: "2023",
      Type: "movie",
      Poster: "poster_url_2",
    },
  ];

  beforeEach(() => {
    render(
      <SearchInput
        setMovieTitle={setMovieTitle}
        options={mockMovies as Array<IMovie>}
      />,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the component", () => {
    expect(screen.getByTestId("movie-search")).toBeInTheDocument();
    expect(screen.getByLabelText("Search for a movie")).toBeInTheDocument();
    expect(screen.getByLabelText("Search for a movie")).toHaveAttribute(
      "type",
      "text",
    );
  });

  test("should renders searched movies from options on input change", () => {
    const searchInput = screen.getByPlaceholderText("Search for movies...");
    fireEvent.change(searchInput, { target: { value: "Movie 1" } });

    expect(screen.queryByText(/Movie 1/i)).toBeInTheDocument();
    expect(screen.queryByText(/Movie 2/i)).toBeInTheDocument();
  });

  test("calls setMovieTitle with input value on Enter press", () => {
    const searchInput = screen.getByPlaceholderText("Search for movies...");
    fireEvent.change(searchInput, { target: { value: "Test Movie" } });

    fireEvent.keyUp(searchInput, { key: "Enter", code: "Enter" });

    expect(setMovieTitle).toHaveBeenCalledWith("Test Movie");
  });

  it("clears search results on Enter press", () => {
    const searchInput = screen.getByPlaceholderText("Search for movies...");
    fireEvent.change(searchInput, { target: { value: "Movie 1" } });

    expect(screen.queryByText(/Movie 1/i)).toBeInTheDocument();
    fireEvent.keyUp(searchInput, { key: "Enter", code: "Enter" });
    expect(screen.queryByText(/Movie 1/i)).not.toBeInTheDocument();
  });
});
