'use client'

import Box from "@mui/material/Box";
import InProgressCircle from "@/components/elements/feedback/InProgressCircle";

const Loading: React.FC = () => {
  return (
    <Box>
      <InProgressCircle /> Loading...
    </Box>
  )
}



export default Loading;
