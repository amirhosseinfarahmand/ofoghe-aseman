import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Earth,
  FlightLogo,
  Hamburger,
  Phone,
  TextBox,
  Zing,
} from "../icon/logo";
import {
  Box,
  Stack,
  Container,
  Tab,
  Tabs,
  Typography,
  TextField,
  Button,
  List,
  ListItemButton,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

const ResultHeader = () => {
  return (
    <header>
      <Box
        sx={{
          display: "flex",
          height: "70px",
          borderBottom: 1,
          bgcolor: "#FFFFFF",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box className="right-box">
          <List>
            <ListItem>
              <ListItemIcon sx={{ minWidth: "50px" }}>
                <FlightLogo />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  sx={{
                    fontFamily: "SF Pro Text",
                    fontSize: { xs: "10px", md: "16px" },
                  }}
                >
                  ofogh aseman persian
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box
          className="left-box"
          sx={{
            display: "flex",
            alignItems: "center",
            minWidth: { md: "300px", xs: "auto" },
            justifyContent: "space-between",
            mr: 10,
          }}
        >
          <List
            sx={{
              display: "flex",
            }}
          >
            <ListItem>
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <Earth />
              </ListItemIcon>
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <Zing />
              </ListItemIcon>
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <Phone />
              </ListItemIcon>
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <TextBox />
              </ListItemIcon>
            </ListItem>
          </List>
          <Hamburger />
        </Box>
      </Box>
    </header>
  );
};

export default ResultHeader;
