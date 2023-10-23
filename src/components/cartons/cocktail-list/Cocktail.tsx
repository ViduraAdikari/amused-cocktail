"use client"

import React, {PropsWithChildren, ReactNode} from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Image from "next/image";

type CocktailProps = {
  cocktail: ICocktail
  children?: ReactNode
}

const Cocktail: React.FC<CocktailProps> = (props: PropsWithChildren<CocktailProps>) => {

  const {cocktail, children} = props;

  const imageLoader = ({src, width}: { src: string, width: number }): string => {
    return width === 200 ? src + "/preview" : src;
  }

  return (
    <Card elevation={2} sx={{
      py: 2,
      borderRadius: 5
    }}>
      <Stack alignItems="center">
        <Image
          loader={() => imageLoader({src: cocktail.photo, width: 200})}
          alt="cocktail"
          width={200}
          height={200}
          src="me.png"
        />
        <Stack sx={{
          width: '100%',
          px: 2
        }}>
          <Typography gutterBottom variant="body1" component="div" sx={{
            my: 1,
            fontWeight: 500,
          }}>
            {cocktail.name}
          </Typography>

          {children}

        </Stack>
      </Stack>
    </Card>
  );
};

export default Cocktail;
