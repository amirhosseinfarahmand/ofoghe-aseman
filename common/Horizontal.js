import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import { LeftIcon, RightIcon } from "../icon/logo";

const Horizontal = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#FFFFFF",
        borderRadius: "10px",
        border: "1px solid #AFAFAF",
        display: "flex",
        justifyContent: "space-evenly",
        mt: 3,
        flexDirection: { xs: "column", md: "row", lg: "row" },
      }}
    >
      <Stack
        sx={{ borderRight: "1px solid #AFAFAF", p: 2, alignItems: "center" }}
        direction="row"
      >
        <div style={{ marginRight: "10px" }}>
          <LeftIcon />
        </div>
        <Box>
          <Typography>95,444,000</Typography>
          <Typography>25 Aug / MO</Typography>
        </Box>
      </Stack>
      <Stack sx={{ borderRight: "1px solid #AFAFAF", p: 2 }} direction="row">
        <Box>
          <Typography>90,156,231</Typography>
          <Typography>23 Aug / SA</Typography>
        </Box>
      </Stack>
      <Stack sx={{ borderRight: "1px solid #AFAFAF", p: 2 }} direction="row">
        <Box>
          <Typography>80,500,000</Typography>
          <Typography>24 Aug / SU</Typography>
        </Box>
      </Stack>
      <Stack
        sx={{ borderRight: "1px solid #AFAFAF", p: 2, bgcolor: "#EFDBBD" }}
        direction="row"
      >
        <Box>
          <Typography>95,444,000 IRR</Typography>
          <Typography>22 Aug / SU</Typography>
        </Box>
      </Stack>
      <Stack sx={{ borderRight: "1px solid #AFAFAF", p: 2 }} direction="row">
        <Box>
          <Typography>90,156,231</Typography>
          <Typography>23 Aug / SA</Typography>
        </Box>
      </Stack>
      <Stack sx={{ borderRight: "1px solid #AFAFAF", p: 2 }} direction="row">
        <Box>
          <Typography>80,500,000</Typography>
          <Typography>24 Aug / SU</Typography>
        </Box>
      </Stack>
      <Stack direction="row" sx={{ p: 2, alignItems: "center" }}>
        <Box>
          <Typography>95,444,000</Typography>
          <Typography>25 Aug / MO</Typography>
        </Box>
        <div style={{ marginLeft: "10px" }}>
          <RightIcon />
        </div>
      </Stack>
    </Box>
  );
};

export default Horizontal;
