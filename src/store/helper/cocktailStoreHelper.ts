/**
 * add a new cocktail to favorites
 * @param favorites
 * @param newCocktail
 */
export const addCocktailToFavorites = (favorites: ICocktail[] | null, newCocktail: ICocktail) => {
  return favorites ? favorites.slice().concat([newCocktail]) : [newCocktail];
}

/**
 * remove a cocktail from favorites by id
 * @param favorites
 * @param idToRemove
 */
export const removeCocktailFromFavorite = (favorites: ICocktail[] | null, idToRemove: number) => {
  if (!favorites) {
    return null;
  }

  return favorites.filter((cocktail: ICocktail) => cocktail.id !== idToRemove);
};

