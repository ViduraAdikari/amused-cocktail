import React, {PropsWithChildren} from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type ResultsCountProps = {
  resultsCount: number
  query: string
}

const ResultsCount: React.FC<ResultsCountProps> = (props: PropsWithChildren<ResultsCountProps>) => {

  const {resultsCount, query} = props;

  const getBoldText = (text: string) => {
    return (
      <Box component="span"
        sx={{
        fontWeight: 600,
      }}>
        {text}
      </Box>
    );
  }


  return (
    <Typography variant="body2" sx={{mt: 6, mb: 3}}>
      Found {getBoldText(resultsCount + "")} results for the search {getBoldText(query)}
    </Typography>
  );
};

export default ResultsCount;
