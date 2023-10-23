import React, {PropsWithChildren} from "react";
import ResultsCount from "@/components/elements/search/ResultsCount";
import SearchResultsList from "@/components/elements/search/SearchResultsList";
import Box from "@mui/material/Box";

type SearchResultsProps = {
  query: string
  cocktails: ICocktail[]
}

const SearchResults: React.FC<SearchResultsProps> = (props: PropsWithChildren<SearchResultsProps>) => {

  const {query, cocktails} = props;

  return (
    <Box sx={{mb: 10}}>
      <ResultsCount resultsCount={cocktails.length} query={query}/>
      <SearchResultsList cocktails={cocktails}/>
    </Box>
  );
};

export default SearchResults;
