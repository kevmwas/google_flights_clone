import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "./protip";
import Copyright from "./copyright";
import Header from "./layout/header";

export default function App() {
  return (
    <Container>
      <Header />
      <Box>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}></Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
