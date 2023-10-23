import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Slice} from "@reduxjs/toolkit/src/createSlice";
import {IAddCocktailPayload, IRemoveFavoritePayload} from "@/store/types/cocktailStoreTypes";
import {addCocktailToFavorites, removeCocktailFromFavorite} from "@/store/helper/cocktailStoreHelper";

export interface ICocktailState {
  favorites: ICocktail[] | null
}

const initialState: ICocktailState = {
  favorites: null
}

export const cocktailReducer: Slice = createSlice({
  name: 'cocktails',
  initialState: initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<IAddCocktailPayload>) => {
      state.favorites = addCocktailToFavorites(state.favorites, action.payload.cocktail);
    },
    removeFavorite: (state, action: PayloadAction<IRemoveFavoritePayload>) => {
      state.favorites = removeCocktailFromFavorite(state.favorites, action.payload.id);
    },
  }
});

export const {
  addToFavorites,
  removeFavorite
} = cocktailReducer.actions;

export default cocktailReducer.reducer;
