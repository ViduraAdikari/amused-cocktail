import {PropsWithChildren, ReactNode} from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type PageContainerProps = {
  heading: string
  children: ReactNode
}

const PageContainer: React.FC<PageContainerProps> = (props: PropsWithChildren<PageContainerProps>) => {

  const {heading, children} = props;

  return (
    <main>
      <Stack sx={{
        py: 3,
        flexDirection: {xs: "column", md: "row"},
        alignItems: "center"
      }}>
        <Typography variant="h1">{heading}</Typography>
      </Stack>

      {children}
    </main>
  );
};

export default PageContainer;
