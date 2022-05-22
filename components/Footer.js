import {
  Box,
  List,
  ListItemText,
  ListItemIcon,
  Stack,
  Typography,
  ListItem,
} from "@mui/material";
import React from "react";
import {
  FaceBook,
  Instagram,
  Logos,
  RedLocation,
  Telegram,
  Twitter,
  Youtube,
} from "../icon/logo";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#143D61",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "auto",
          flexDirection: { md: "row", xs: "column" },
          p: 4,
        }}
      >
        <Stack>
          <Typography
            sx={{
              color: "#ffff",
              fontSize: "12px",
              fontFamily: "SF Pro Text",
              marginTop: "50px",
            }}
          >
            Copyright 2020 © Samatsg
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ marginTop: "50px" }}>
          <RedLocation />
          &nbsp;
          <Typography
            sx={{
              color: "#ffff",
              fontSize: "12px",
              fontFamily: "SF Pro Text",
            }}
          >
            IRAQ , Najaf, Eshteraki Zone٫ Share Al Ravan Intersection٫ Hay Al
            Amir | Info@Samamedi.Com
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ marginTop: "50px" }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Telegram />
              </ListItemIcon>
              <ListItemIcon>
                <FaceBook />
              </ListItemIcon>
              <ListItemIcon>
                <Instagram />
              </ListItemIcon>
              <ListItemIcon>
                <Twitter />
              </ListItemIcon>
              <ListItemIcon>
                <Youtube />
              </ListItemIcon>
            </ListItem>
          </List>
        </Stack>
      </Box>
    </footer>
  );
};

export default Footer;
