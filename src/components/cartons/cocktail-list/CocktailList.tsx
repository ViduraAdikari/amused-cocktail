import React from "react";
import Grid from "@mui/material/Grid";
import Cocktail from "@/components/cartons/cocktail-list/Cocktail";
import {sampleCocktails} from "@/const/testValues";

const CocktailList: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {sampleCocktails.map((cocktail: ICocktail) =>
        (<Grid key={cocktail.id} item xs={12} md={4} lg={2} xl={3}><Cocktail cocktail={cocktail}/></Grid>)
      )}
    </Grid>
  );
}

export default CocktailList;
