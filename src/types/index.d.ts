interface ICocktail {
  id: number
  name: string
  category: string
  photo: string
  isFavorite?: boolean
}

type ApiDrink = {
  idDrink: number
  strDrink: string
  strCategory: string
  strDrinkThumb: string
}
