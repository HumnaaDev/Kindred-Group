import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import debounce from "lodash.debounce";
import SearchIcon from "@mui/icons-material/Search";
import { SearchInputWrapper } from "./SearchInput.style";
import { IMovie } from "../../typings";

type ISearchInputProps = {
  setMovieTitle: (title: string) => void;
  options: Array<IMovie>;
};

export const SearchInput: React.FC<ISearchInputProps> = ({
  options,
  setMovieTitle,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<IMovie[]>([]);

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (options) {
      setSearchResults(options);
    }
  }, [options]);

  const search = async (query: string) => {
    setMovieTitle(query);
  };

  const debouncedSearch = debounce(search, 300);

  const handleInputKeUp = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (event.key === "Enter") {
      setMovieTitle(searchTerm);
      setSearchResults([]);
    }
  };

  return (
    <SearchInputWrapper className="search-input">
      <Autocomplete
        data-testid="movie-search"
        options={searchResults}
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.Title
        }
        freeSolo
        value={searchTerm}
        onInputChange={(_, newInputValue) => setSearchTerm(newInputValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for a movie"
            variant="outlined"
            placeholder="Search for movies..."
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  <SearchIcon color="action" />
                  {params.InputProps.startAdornment}
                </>
              ),
              onKeyUp: (event) => handleInputKeUp(event),
            }}
          />
        )}
      />
    </SearchInputWrapper>
  );
};
