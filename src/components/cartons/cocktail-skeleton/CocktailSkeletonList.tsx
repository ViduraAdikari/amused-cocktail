import React, {PropsWithChildren} from "react";
import Grid from "@mui/material/Grid";
import CocktailSkeleton from "@/components/cartons/cocktail-skeleton/CocktailSkeleton";

type CocktailSkeletonListProps = {
  numberOfSkeletons: number
}

const CocktailSkeletonList: React.FC<CocktailSkeletonListProps> =
  (props: PropsWithChildren<CocktailSkeletonListProps>) => {

    const {numberOfSkeletons} = props;

    return (
      <Grid container spacing={2}>
        {
          Array(numberOfSkeletons).fill("Skeleton").map((value: string, index: number) =>
            (<Grid item key={index}><CocktailSkeleton/></Grid>))
        }
      </Grid>
    );
  };

export default CocktailSkeletonList;
