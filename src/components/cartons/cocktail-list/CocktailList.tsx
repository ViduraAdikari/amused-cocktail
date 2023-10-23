import React, {PropsWithChildren} from "react";
import Grid from "@mui/material/Grid";
import Cocktail from "@/components/cartons/cocktail-list/Cocktail";

type CocktailListProps = {
  cocktails: ICocktail[]
}

const CocktailList: React.FC<CocktailListProps> = (props: PropsWithChildren<CocktailListProps>) => {

  const {cocktails} = props;

  return (
    <Grid container spacing={2}>
      {cocktails.map((cocktail: ICocktail) =>
        (<Grid key={cocktail.id} item xs={12} md={4} lg={2} xl={3}><Cocktail cocktail={cocktail}/></Grid>)
      )}
    </Grid>
  );
};

export default CocktailList;
