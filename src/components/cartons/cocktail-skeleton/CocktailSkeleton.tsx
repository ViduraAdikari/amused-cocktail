import React from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

const CocktailSkeleton: React.FC = () => {
  return (
    <Stack spacing={1} sx={{
      borderRadius: '5px',
      py: 2,
    }}>
      <Skeleton variant="rectangular" width={200} height={200}/>
      <Typography variant="h6" component="div">
        <Skeleton variant="text"/>
      </Typography>
      <Skeleton variant="text" sx={{
        fontSize: '1rem',
        '& span': {
          pt: 0
        }
      }}/>
    </Stack>
  );
}

export default CocktailSkeleton;
