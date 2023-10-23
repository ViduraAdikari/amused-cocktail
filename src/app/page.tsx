import RandomCocktails from "@/components/pallet/RandomCocktails";
import PageContainer from "@/components/cartons/containers/PageContainer";

export const metadata = {
  title: 'Cocktails',
  description: 'Amused Cocktail application for testing cocktail db. Home page loads 5 random cocktails.',
}

export default function Home() {

  return (
    <PageContainer heading="Five Random Cocktails">
      <RandomCocktails/>
    </PageContainer>
  )
}
