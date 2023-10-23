import React, {PropsWithChildren} from "react";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import {useAppDispatch, useAppSelector} from "@/store/hooks/hooks";
import {addToFavorites, removeFavorite} from "@/store/reducers/cocktailReducer";

type ActionButtonProps = {
  cocktail: ICocktail
}

const ActionButton: React.FC<ActionButtonProps> = (props: PropsWithChildren<ActionButtonProps>) => {

  const {cocktail} = props;

  const dispatch = useAppDispatch();
  const favorites: ICocktail[] | null = useAppSelector(state => state.cocktails.favorites);

  const indexOfFavorite: number = !favorites ? -1 :
    favorites.findIndex((favCocktail: ICocktail) => cocktail.id === favCocktail.id);

  const handleOnAddToFavoriteClick = () => {
    dispatch(addToFavorites({cocktail: cocktail}));
  }

  const handleOnRemoveFromFavoriteClick = () => {
    dispatch(removeFavorite({id: cocktail.id}));
  }

  if (indexOfFavorite < 0) {
    return (
      <Button startIcon={<AddOutlinedIcon/>}
              variant="contained" size="small" sx={{mt: 2}}
              title="Add to favorites"
              onClick={handleOnAddToFavoriteClick}>
        favorites
      </Button>
    );
  }

  return (
    <Button startIcon={<RemoveOutlinedIcon/>}
            variant="outlined" size="small" sx={{mt: 2}}
            title="Remove from favorites"
            onClick={handleOnRemoveFromFavoriteClick}>
      favorite
    </Button>
  )
};

export default ActionButton;
