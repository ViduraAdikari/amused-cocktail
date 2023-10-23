"use client";

import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import SearchInput from "@/components/elements/search/SearchInput";
import SearchResults from "@/components/elements/search/SearchResults";
import CocktailSkeletonList from "@/components/cartons/cocktail-skeleton/CocktailSkeletonList";
import Box from "@mui/material/Box";
import {useSearchCocktails} from "@/hooks/data/useSearchCocktails";

const SearchBar: React.FC = () => {

  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  const handleOnQuerySubmitted = (query: string) => {
    setSearchQuery(query);
  }

  const {loading, error, data} = useSearchCocktails(searchQuery);

  return (
    <Stack>
      <SearchInput isSearching={loading} onSearchSubmitted={handleOnQuerySubmitted}/>

      {loading && <Box sx={{mt: 5}}><CocktailSkeletonList numberOfSkeletons={2}/></Box>}

      {(searchQuery && data) &&
        <SearchResults query={searchQuery} cocktails={data}/>}
    </Stack>
  );
}

export default SearchBar;
