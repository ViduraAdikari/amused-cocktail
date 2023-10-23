import React, {PropsWithChildren} from "react";
import Grid from "@mui/material/Grid";
import Cocktail from "@/components/cartons/cocktail-list/Cocktail";
import Divider from "@mui/material/Divider";
import ActionButton from "@/components/elements/search/ActionButton";

type SearchResultsProps = {
  cocktails: ICocktail[]
}

const SearchResultsList: React.FC<SearchResultsProps> = (props: PropsWithChildren<SearchResultsProps>) => {

  const {cocktails} = props;

  return (
    <Grid container spacing={2}>
      {cocktails.map((cocktail: ICocktail) => {
          return (
            <Grid key={cocktail.id} item xs={12} md={4} lg={2} xl={3}>
              <Cocktail cocktail={cocktail}>
                <Divider/>
                <ActionButton cocktail={cocktail}/>
              </Cocktail>
            </Grid>
          )
        }
      )}
    </Grid>
  );
};

export default SearchResultsList;
