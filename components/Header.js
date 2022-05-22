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
  MenuItem,
  Menu,
} from "@mui/material";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import { useRouter } from "next/router";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const routeHome = () => {
    router.push("/");
  };

  const routeResult = () => {
    router.push("/result/oneWay");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <Box className="left-box">
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
          className="right-box"
          sx={{
            display: "flex",
            alignItems: "center",
            minWidth: { md: "300px" },
            justifyContent: "space-between",
            mr: { xs: 1, sm: 10 },
          }}
        >
          <List
            sx={{
              display: "flex",
            }}
          >
            <ListItem>
              <ListItemIcon sx={{ minWidth: { xs: "30px", sm: "40px" } }}>
                <Earth />
              </ListItemIcon>
              <ListItemIcon sx={{ minWidth: { xs: "30px", sm: "40px" } }}>
                <Zing />
              </ListItemIcon>
              <ListItemIcon sx={{ minWidth: { xs: "30px", sm: "40px" } }}>
                <Phone />
              </ListItemIcon>
              <ListItemIcon sx={{ minWidth: { xs: "0", sm: "40px" } }}>
                <TextBox />
              </ListItemIcon>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Hamburger />
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={routeHome}>home page</MenuItem>
            <MenuItem onClick={routeResult}>result page</MenuItem>
          </Menu>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
