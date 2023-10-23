import {useEffect, useState} from "react";
import axios from "axios";
import {API_REQUESTS} from "@/const/values";
import {getErrorMessageByCode} from "@/util/util";

export const useRandomCocktails = (isRequested: boolean, numOfCocktails: number) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[] | null>(null);
  const [data, setData] = useState<ICocktail[] | null>(null);

  const fetchCocktail = () => {
    axios.get(API_REQUESTS.random).then((response) => {
      const drink: ApiDrink = response.data.drinks[0];

      const cocktail: ICocktail = {
        id: drink.idDrink,
        name: drink.strDrink,
        category: drink.strCategory,
        photo: drink.strDrinkThumb
      }

      const cocktails: ICocktail[] = data ? data.slice().concat(cocktail) : [cocktail];
      setData(cocktails);
    }).catch(error => {
      const errorMessage: string = getErrorMessageByCode(error.response.status);
      const errorMessages: string[] = errors ? errors.slice().concat(errorMessage) : [errorMessage];
      setErrors(errorMessages);
    });
  }

  useEffect(() => {
    if (!loading) {
      return;
    }

    if (data && data.length > numOfCocktails - 1) {
      setLoading(false);
      return;
    }

    fetchCocktail();
  }, [loading, data]); // eslint-disable-line

  useEffect(() => {
    if (!isRequested || loading) {
      return;
    }

    setData(null);
    setLoading(true);
  }, [isRequested]); // eslint-disable-line

  return {loading, errors, data};
}
