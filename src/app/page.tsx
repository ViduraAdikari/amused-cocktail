import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import RandomCocktails from "@/components/pallet/RandomCocktails";

export const metadata = {
  title: 'Cocktail',
  description: 'Amused Cocktail application for testing cocktail db. Home page loads 5 random cocktails.',
}

export default function Home() {

  return (
    <main>
      <Stack sx={{
        py: 3,
        flexDirection: {xs: "column", md: "row"},
        justifyContent: {xs: "flex-end", md: "space-between"},
        alignItems: "flex-end"
      }}>
        <Typography variant="h1">Five Random Cocktails</Typography>
      </Stack>

      <RandomCocktails/>
    </main>
  )
}
