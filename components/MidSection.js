import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { LocationOff, LocationOn, RedLogo } from "../icon/logo";

const MidSection = () => {
  return (
    <section style={{ width: "100%" }}>
      <Box sx={{ my: 10 }}>
        <Stack
          direction="row"
          sx={{
            flexWrap: "wrap",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box className="box1">
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <LocationOff />
              &nbsp;
              <Typography>Baghdad</Typography>
            </Stack>
            <img src="https://i.ibb.co/KyP5RK8/redlogo.png" height={23} />
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <LocationOn />
              &nbsp;
              <Typography color="snow">MashHad</Typography>
            </Stack>
          </Box>
          <Box className="box2">
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <LocationOn />
              &nbsp;
              <Typography color="snow">Baghdad</Typography>
            </Stack>
            <img src="https://i.ibb.co/KyP5RK8/redlogo.png" height={23} />
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <LocationOff />
              &nbsp;
              <Typography>Tehran</Typography>
            </Stack>
          </Box>
          <Box className="box1">
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <LocationOff />
              &nbsp;
              <Typography>Baghdad</Typography>
            </Stack>
            <img src="https://i.ibb.co/KyP5RK8/redlogo.png" height={23} />
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <LocationOn />
              &nbsp;
              <Typography color="snow">Dubai</Typography>
            </Stack>
          </Box>
          <Box className="box2">
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <LocationOn />
              &nbsp;
              <Typography color="snow">Najaf</Typography>
            </Stack>
            <img src="https://i.ibb.co/KyP5RK8/redlogo.png" height={23} />
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <LocationOff />
              &nbsp;
              <Typography>MashHad</Typography>
            </Stack>
          </Box>
          <Box className="box2">
            <Stack direction="row" sx={{ alignItems: "center", mr: 2 }}>
              <LocationOn />
              &nbsp;
              <Typography color="snow">Najaf</Typography>
            </Stack>
            <img src="https://i.ibb.co/KyP5RK8/redlogo.png" height={23} />
            <Stack sx={{ alignItems: "center" }} direction="row">
              <LocationOff />
              &nbsp;
              <Typography>Tehran</Typography>
            </Stack>
          </Box>
          <Box className="box1" sx={{}}>
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <LocationOff />
              &nbsp;
              <Typography>Mashhad</Typography>
            </Stack>
            <img src="https://i.ibb.co/KyP5RK8/redlogo.png" height={23} />
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <LocationOn />
              &nbsp;
              <Typography color="snow">Najaf</Typography>
            </Stack>
          </Box>
          <Box className="box2">
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <LocationOn />
              &nbsp;
              <Typography color="snow">Tehran</Typography>
            </Stack>
            <img src="https://i.ibb.co/KyP5RK8/redlogo.png" height={23} />
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <LocationOff />
              &nbsp;
              <Typography>Najaf</Typography>
            </Stack>
          </Box>
          <Box className="box1" sx={{}}>
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <LocationOff />
              &nbsp;
              <Typography>Najaf</Typography>
            </Stack>
            <img src="https://i.ibb.co/KyP5RK8/redlogo.png" height={23} />
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <LocationOn />
              &nbsp;
              <Typography color="snow">Dubai</Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </section>
  );
};

export default MidSection;
