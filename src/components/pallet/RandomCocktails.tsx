"use client";

import React, {useEffect, useState} from "react";
import CocktailSkeletonList from "@/components/cartons/cocktail-skeleton/CocktailSkeletonList";
import CocktailList from "@/components/cartons/cocktail-list/CocktailList";

const RandomCocktails: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);

      clearTimeout(timeout);
    }, 3000);
  }, []);


  return (
    <>
      {isLoading && <CocktailSkeletonList numberOfSkeletons={5}/>}
      {!isLoading && <CocktailList/>}
    </>
  );
}

export default RandomCocktails;
