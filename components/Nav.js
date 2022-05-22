import {
  Box,
  Tabs,
  Tab,
  Container,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  NativeSelect,
  ThemeProvider,
  createTheme,
  OutlinedInput,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  AirplaneOn,
  AirplaneOff,
  BedOn,
  BedOff,
  OpenPacketOn,
  OpenPacketOff,
  TrainOff,
  TrainOn,
  Calculator,
  Search,
} from "../icon/logo";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Nav = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [clickAirplane, setClickAriplane] = useState(true);
  const [clickBed, setClickBed] = useState(false);
  const [clickOpenPacket, setClickOpenPacket] = useState(false);
  const [clickTrain, setClickTrain] = useState(false);

  const onChangeAirplane = () => {
    setClickAriplane(true);
    setClickBed(false);
    setClickOpenPacket(false);
    setClickTrain(false);
  };

  const onChangeBed = () => {
    setClickAriplane(false);
    setClickBed(true);
    setClickOpenPacket(false);
    setClickTrain(false);
  };

  const onChangeOpenPacket = () => {
    setClickAriplane(false);
    setClickBed(false);
    setClickOpenPacket(true);
    setClickTrain(false);
  };
  const onChangeTrain = () => {
    setClickAriplane(false);
    setClickBed(false);
    setClickOpenPacket(false);
    setClickTrain(true);
  };

  //theme
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <nav>
        <Box
          className="box"
          sx={{
            width: "100%",
            height: "460px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          <Container
            sx={{
              bgcolor: "#143D61",
              float: "none",
              borderRadius: "10px 10px 0 0",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              indicatorColor="#292524"
              textColor="primary"
            >
              <Tab
                onClick={() => onChangeAirplane()}
                iconPosition="start"
                label={
                  <p
                    style={{
                      marginLeft: "5px",
                      fontFamily: "SF Pro Text",
                      textTransform: "none",
                    }}
                  >
                    Flight
                  </p>
                }
                icon={clickAirplane ? <AirplaneOn /> : <AirplaneOff />}
                {...a11yProps(0)}
                sx={{ ml: 2, color: "#306A9E" }}
              />
              <Tab
                onClick={() => onChangeBed()}
                label={
                  <p
                    style={{
                      marginLeft: "5px",
                      fontFamily: "SF Pro Text",
                      textTransform: "none",
                    }}
                  >
                    Hotel
                  </p>
                }
                iconPosition="start"
                icon={clickBed ? <BedOn /> : <BedOff />}
                {...a11yProps(1)}
                sx={{ color: "#306A9E" }}
              />
              <Tab
                onClick={() => onChangeOpenPacket()}
                label={
                  <p
                    style={{
                      marginLeft: "5px",
                      fontFamily: "SF Pro Text",
                      textTransform: "none",
                    }}
                  >
                    Accommodation
                  </p>
                }
                iconPosition="start"
                icon={clickOpenPacket ? <OpenPacketOn /> : <OpenPacketOff />}
                {...a11yProps(2)}
                sx={{ color: "#306A9E" }}
              />
              <Tab
                onClick={() => onChangeTrain()}
                label={
                  <p
                    style={{
                      marginLeft: "5px",
                      fontFamily: "SF Pro Text",
                      textTransform: "none",
                    }}
                  >
                    Train
                  </p>
                }
                iconPosition="start"
                icon={clickTrain ? <TrainOn /> : <TrainOff />}
                {...a11yProps(3)}
                sx={{ color: "#306A9E" }}
              />
            </Tabs>
          </Container>
        </Box>
        <Container
          sx={{
            bgcolor: "white",
            boxShadow: "1px 2px 3px gray",
            borderRadius: "0 0 10px 10px",
          }}
        >
          <TabPanel value={value} index={0}>
            <Box
              sx={{
                display: "flex",
                width: "300px",
                justifyContent: "space-between",
              }}
            >
              <select className="select1">
                <option>OneWay</option>
              </select>
              <select className="select2">
                <option>1 passanger , Economy</option>
              </select>
            </Box>
            <Stack
              spacing={2}
              sx={{ mt: 2, justifyContent: "center" }}
              direction={{ md: "row", xs: "column" }}
            >
              <TextField label="form" className="TextField-test" />
              <TextField label="To" className="TextField-test" />
              <TextField
                label={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "5px",
                    }}
                  >
                    <Calculator />
                    <p style={{ marginLeft: "10px" }}>Depart</p>
                  </div>
                }
                className="TextField-test"
              />
              <TextField
                label={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "5px",
                    }}
                  >
                    <Calculator />
                    <p style={{ marginLeft: "10px" }}>Return</p>
                  </div>
                }
                className="TextField-test"
                disabled
              />
              <Button
                variant="contained"
                startIcon={
                  <div
                    style={{
                      marginTop: "9px",
                      marginLeft: "6px",
                    }}
                  >
                    <Search />
                  </div>
                }
                sx={{
                  height: "56px",
                  width: "92px",
                  borderRadius: "10px",
                  bgcolor: "#EB0000",
                }}
              ></Button>
            </Stack>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item four
          </TabPanel>
        </Container>
      </nav>
    </ThemeProvider>
  );
};

export default Nav;
