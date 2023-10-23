import React from "react";
import PageContainer from "@/components/cartons/containers/PageContainer";
import FavoritesCocktails from "@/components/pallet/FavoritesCocktails";

export const metadata = {
  title: 'Favorites | Cocktail',
  description: 'Amused Cocktail application for testing cocktail db. List favorite cocktails on this page.',
}

const Favorites: React.FC = () => {
  return (
    <PageContainer heading="Favorite Cocktails">
      <FavoritesCocktails/>
    </PageContainer>
  );
}

export default Favorites;
