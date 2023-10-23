import React, {PropsWithChildren} from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type ErrorListProps = {
  errors: string[]
}

const ErrorList: React.FC<ErrorListProps> = (props: PropsWithChildren<ErrorListProps>) => {

  const {errors} = props;

  return (
    <Stack sx={{
      mt: 3
    }}>
      <Typography variant="h6">
        Errors
      </Typography>
      <ul>
        {
          errors.map((error: string, index: number) => <li key={index}>{error}</li>)
        }
      </ul>
    </Stack>

  );
};

export default ErrorList;
