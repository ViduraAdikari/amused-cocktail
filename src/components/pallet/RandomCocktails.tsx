"use client";

import React, {useEffect, useState} from "react";
import CocktailSkeletonList from "@/components/cartons/cocktail-skeleton/CocktailSkeletonList";
import CocktailList from "@/components/cartons/cocktail-list/CocktailList";
import {useRandomCocktails} from "@/hooks/data/useRandomCocktails";
import RefreshButton from "@/components/elements/buttons/RefreshButton";
import Stack from "@mui/material/Stack";
import ErrorList from "@/components/elements/feedback/ErrorList";

export const NUM_RANDOM_COCKTAILS: number = 5;

const RandomCocktails: React.FC = () => {
  const [isRequested, setIsIsRequested] = useState(true);

  const {loading, errors, data} =
    useRandomCocktails(isRequested, NUM_RANDOM_COCKTAILS);

  useEffect(() => {
    if (!data || data.length < NUM_RANDOM_COCKTAILS) {
      return;
    }

    setIsIsRequested(false);
  }, [data]);

  const handleOnRefreshClick = () => {
    setIsIsRequested(true);
  }

  return (
    <>
      <Stack direction="row" justifyContent="flex-end"
             sx={{
               mt: {xs: 2, sm: 0},
               mb: 2,
             }}>
        <RefreshButton variant="secondary" onClick={handleOnRefreshClick}
                       disabled={loading}>
          Refresh
        </RefreshButton>
      </Stack>

      {loading && <CocktailSkeletonList numberOfSkeletons={NUM_RANDOM_COCKTAILS}/>}
      {(!loading && data) && <CocktailList cocktails={data}/>}

      {errors && <ErrorList errors={errors}/>}

      <Stack sx={{
        py: 3,
      }}>
        <RefreshButton variant="primary" size="large" disabled={loading}
                       onClick={handleOnRefreshClick}>
          Refresh
        </RefreshButton>
      </Stack>
    </>
  );
};

export default RandomCocktails;
