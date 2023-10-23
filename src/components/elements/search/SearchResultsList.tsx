import React, {PropsWithChildren} from "react";
import Grid from "@mui/material/Grid";
import Cocktail from "@/components/cartons/cocktail-list/Cocktail";
import Button from "@mui/material/Button";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import Divider from "@mui/material/Divider";

type SearchResultsProps = {
  cocktails: ICocktail[]
}

const SearchResultsList: React.FC<SearchResultsProps> = (props: PropsWithChildren<SearchResultsProps>) => {

  const {cocktails} = props;

  const getActionButton = (cocktail: ICocktail) => {
    if (cocktail.isFavorite) {
      return (
        <Button startIcon={<AddOutlinedIcon/>}
                variant="contained" size="small" sx={{mt: 2}}
                title="Add to favorites">
          favorites
        </Button>
      );
    }

    return (
      <Button startIcon={<RemoveOutlinedIcon/>}
              variant="outlined" size="small" sx={{mt: 2}}
              title="Remove from favorites">
        favorite
      </Button>
    )
  }

  return (
    <Grid container spacing={2}>
      {cocktails.map((cocktail: ICocktail) => {
          return (
            <Grid key={cocktail.id} item xs={12} md={4} lg={2} xl={3}>
              <Cocktail cocktail={cocktail}>
                <Divider/>
                {getActionButton(cocktail)}
              </Cocktail>
            </Grid>
          )
        }
      )}
    </Grid>
  );
};

export default SearchResultsList;
