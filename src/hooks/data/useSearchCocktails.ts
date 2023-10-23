import {useEffect, useState} from "react";
import axios from "axios";
import {API_REQUESTS} from "@/const/values";
import {getErrorMessageByCode} from "@/util/util";

export const useSearchCocktails = (query: string | null) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ICocktail[] | null>(null);

  const getCocktailsFromDrinks = (drinks: ApiDrink[]) => {
    return drinks.map((drink: ApiDrink) => {
      const cocktail: ICocktail = {
        id: drink.idDrink,
        name: drink.strDrink,
        category: drink.strCategory,
        photo: drink.strDrinkThumb
      }

      return cocktail;
    })
  }

  const searchCocktails = () => {
    axios.get(API_REQUESTS.searchByName, {params: {s: query}})
      .then(response => {
        const drinks: ApiDrink[] | null = response.data.drinks;
        const cocktails: ICocktail[] = drinks ? getCocktailsFromDrinks(drinks) : [];
        setData(cocktails);
      }).catch(error => {
      setError(getErrorMessageByCode(error.response.status));
    }).finally(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    if (!loading || !query) {
      return;
    }

    searchCocktails();
  }, [loading]); // eslint-disable-line

  useEffect(() => {
    if (!query) {
      return;
    }

    setData(null);
    setError(null)
    setLoading(true);
  }, [query]);

  return {loading, error, data};
}
