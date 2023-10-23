import React from "react";
import PageContainer from "@/components/cartons/containers/PageContainer";
import SearchBar from "@/components/pallet/SearchBar";

export const metadata = {
  title: 'Search | Cocktail',
  description: 'Amused Cocktail application for testing cocktail db. Search cocktails in this page.',
}

const Search: React.FC = () => {
  return (
    <PageContainer heading="Search Cocktails">
      <SearchBar/>
    </PageContainer>

    );
}

export default Search;
