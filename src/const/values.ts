import {NavItemData} from "@/components/cartons/navbar/nav-item";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URI || "https://www.thecocktaildb.com/api/json/v1/1";
axios.defaults.baseURL = API_URL;

export const isRoundedBorders: boolean = false;

export const navItems: NavItemData[] = [
  {label: 'Home', link: '/'},
  {label: 'Search', link: '/search'},
  {label: 'Favorites', link: '/favorites'},
]

export const API_REQUESTS = {
  random: '/random.php',

}
