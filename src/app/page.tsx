import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import RefreshButton from "@/components/elements/buttons/RefreshButton";
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
        <Box sx={{
          mt: {xs: 2, sm: 0}
        }}>
          <RefreshButton variant="secondary">
            Refresh
          </RefreshButton>
        </Box>

      </Stack>

      <RandomCocktails/>

      <Stack sx={{
        py: 3,
      }}>
        <RefreshButton variant="primary" size="large">
          Refresh
        </RefreshButton>
      </Stack>
    </main>
  )
}
