import React, {PropsWithChildren} from "react";
import ResultsCount from "@/components/elements/search/ResultsCount";
import SearchResultsList from "@/components/elements/search/SearchResultsList";

type SearchResultsProps = {
  query: string
  cocktails: ICocktail[]
}

const SearchResults: React.FC<SearchResultsProps> = (props: PropsWithChildren<SearchResultsProps>) => {

  const {query, cocktails} = props;

  return (
    <>
      <ResultsCount resultsCount={12} query={query}/>
      <SearchResultsList cocktails={cocktails}/>
    </>
  );
};

export default SearchResults;
