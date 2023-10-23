"use client";

import React, {useEffect, useState} from "react";
import Stack from "@mui/material/Stack";
import SearchInput from "@/components/elements/search/SearchInput";
import {sampleCocktails} from "@/const/testValues";
import SearchResults from "@/components/elements/search/SearchResults";
import CocktailSkeletonList from "@/components/cartons/cocktail-skeleton/CocktailSkeletonList";
import Box from "@mui/material/Box";

const SearchBar: React.FC = () => {

  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleOnQuerySubmitted = (query: string) => {
    setSearchQuery(query);
  }

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    setIsSearching(true);
  }, [searchQuery]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSearching(false);

      clearTimeout(timeout);
    }, 3000);
  }, [isSearching]);

  return (
    <Stack>
      <SearchInput isSearching={isSearching} onSearchSubmitted={handleOnQuerySubmitted}/>

      {isSearching && <Box sx={{mt: 5}}><CocktailSkeletonList numberOfSkeletons={2}/></Box>}

      {(searchQuery && !isSearching) &&
        <SearchResults query={searchQuery} cocktails={sampleCocktails.slice(3)}/>}
    </Stack>
  );
}

export default SearchBar;
