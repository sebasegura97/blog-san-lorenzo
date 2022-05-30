import { Box, Typography } from "@mui/material";
import React from "react";

const VisitorAdvice = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      paddingTop={8}
    >
      <Typography variant="h3" textAlign={"center"}>
        {" "}
        Panel de administrador{" "}
      </Typography>
      <Typography variant="subtitle1" textAlign={"center"} marginTop={2}>
        {" "}
        Por favor inicia sesión o registrate{" "}
      </Typography>
    </Box>
  );
};

export default VisitorAdvice;
