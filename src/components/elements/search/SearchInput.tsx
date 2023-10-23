import React, {FormEvent, PropsWithChildren, useState} from "react";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

type SearchInputProps = {
  isSearching: boolean
  onSearchSubmitted: (query: string) => void
}

const MIN_SEARCH_QUERY_LENGTH: number = 2;

const SearchInput: React.FC<SearchInputProps> = (props: PropsWithChildren<SearchInputProps>) => {

  const {isSearching} = props;

  const [query, setQuery] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!query || query.length < MIN_SEARCH_QUERY_LENGTH) {
      return;
    }

    query && props.onSearchSubmitted(query);
    setIsSubmitted(true);
  }

  const handleOnQueryChange = (query: string) => {
    setIsSubmitted(false);
    setQuery(query);
  }

  const isSearchError: boolean = isSubmitted && (!query || query.length < MIN_SEARCH_QUERY_LENGTH);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {width: {xs: '100%', md: '25ch'}},
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleOnSubmit}
    >
      <Stack direction="row" alignItems="center" spacing={3}>

        <TextField id="search-input"
                   label="Search by name"
                   value={query ? query : ""}
                   type="search"
                   error={isSearchError}
                   helperText={isSearchError ? "Enter at least 2 characters" : ""}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnQueryChange(event.target.value)}
        />

        {isSearching && <CircularProgress/>}
      </Stack>

    </Box>
  );
};

export default SearchInput;
