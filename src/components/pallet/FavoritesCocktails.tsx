"use client";

import React from "react";
import {useAppSelector} from "@/store/hooks/hooks";
import SearchResultsList from "@/components/elements/search/SearchResultsList";
import Typography from "@mui/material/Typography";

const FavoritesCocktails: React.FC = () => {
  const favorites: ICocktail[] | null = useAppSelector(state => state.cocktails.favorites);

  if (!favorites || favorites.length === 0) {
    return (
      <Typography variant="body1">
        Favorites store is empty. Search to add to favorites.
      </Typography>
    )
  }

  return (
    <SearchResultsList cocktails={favorites}/>
  );
}

export default FavoritesCocktails;
