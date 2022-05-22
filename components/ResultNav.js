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
  Divider,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Slider,
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
  CheckBox,
  Checked,
  PriceCalender,
  LeftIcon,
  RightIcon,
  More,
} from "../icon/logo";
import Horizontal from "../common/Horizontal";
import VerticalBox from "../common/VerticalBox";

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

const ResultNav = () => {
  const [sliderState1, setSliderState1] = useState(76764800);
  const [sliderState2, setSliderState2] = useState(555859400);

  const [sliderItem1, setSliderItem1] = useState(76764800);
  const [sliderItem2, setSliderItem2] = useState(555859400);
  function valuetext(value) {
    //   return `${value}°C`;
    // setSliderState(value);
  }

  function valuetext2(value) {
    //   return `${value}°C`;
    // setSliderState(value);
  }

  const [value, setValue] = React.useState(0);

  const [valueSlider, setValueSlider] = React.useState([76764800, 555859400]);
  const [valueSlider2, setValueSlider2] = React.useState([76764800, 555859400]);

  const handleChangeSlider = (event, newValue) => {
    setValueSlider(newValue);
    setSliderState1(newValue[0]);
    setSliderState2(newValue[1]);
  };

  const handleChangeSlider2 = (event, newValue) => {
    setValueSlider2(newValue);
    setSliderItem1(newValue[0]);
    setSliderItem2(newValue[1]);
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
        <Box sx={{ position: "relative", zIndex: "1" }}>
          <Stack sx={{ bgcolor: "#143D61", height: "90px" }}>
            <Box sx={{ display: "flex", alignItems: "center", pl: 14 }}>
              <Typography color="snow">Home</Typography> &nbsp;
              <More />
              &nbsp; <Typography sx={{ color: "#557897" }}>result</Typography>
            </Box>
          </Stack>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: { xs: "static", xl: "absolute", md: "absolute" },
              top: "80%",
            }}
          >
            <Box
              sx={{
                width: { lg: "100%", xl: "1300px" },
                bgcolor: "white",
                boxShadow: "1px 2px 3px gray",
                borderRadius: "10px 10px 10px 10px",
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
            </Box>
            <Stack
              direction={{ xs: "column", md: "row" }}
              sx={{
                justifyContent: "space-around",
                // bgcolor: "red",
                alignItems: { xs: "center", md: "normal" },
                width: "100%",
                mt: 4,
                px: { xs: 0, md: 7 },
              }}
            >
              <Box
                className="slider"
                sx={{
                  width: "288px",
                  mb: { xs: 2, md: 0 },
                }}
              >
                <Stack
                  sx={{
                    p: 2,
                    borderTop: "1px solid #CCCCCC",
                    borderLeft: "1px solid #CCCCCC",
                    borderRight: "1px solid #CCCCCC",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                >
                  <Typography variant="h4">Filter</Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box>
                    <select
                      className="select2"
                      style={{ width: "100%", marginBottom: "5px" }}
                    >
                      <option>Outbound Stop Count</option>
                    </select>
                    <FormControl component="fieldset">
                      <FormGroup aria-label="position">
                        <FormControlLabel
                          value="end"
                          control={
                            <Checkbox
                              icon={<CheckBox />}
                              checkedIcon={<Checked />}
                            />
                          }
                          label={<p style={{ fontSize: "11px" }}>1 step</p>}
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="end"
                          control={
                            <Checkbox
                              icon={<CheckBox />}
                              checkedIcon={<Checked />}
                            />
                          }
                          label={<p style={{ fontSize: "11px" }}>2 step</p>}
                          labelPlacement="end"
                        />
                      </FormGroup>
                    </FormControl>
                  </Box>
                  <Divider sx={{ my: 2 }} />
                  <Box>
                    <select
                      className="select2"
                      style={{ width: "100%", marginBottom: "5px" }}
                    >
                      <option
                        style={{ fontFamily: "SF Pro Text", fontSize: "13px" }}
                      >
                        1 passanger , Economy
                      </option>
                    </select>
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={valueSlider}
                      max={855859400}
                      min={26764800}
                      onChange={handleChangeSlider}
                      valueLabelDisplay="auto"
                      getAriaValueText={(value1, value2) =>
                        valuetext(value1, value2)
                      }
                    />
                    <Stack
                      direction="row"
                      sx={{ width: "100%", justifyContent: "space-between" }}
                    >
                      <Typography sx={{ fontSize: "11px" }}>
                        {sliderState1.toLocaleString()}
                      </Typography>
                      <Typography sx={{ fontSize: "11px" }}>
                        {sliderState2.toLocaleString()}
                      </Typography>
                    </Stack>
                  </Box>
                  <Divider sx={{ my: 2 }} />
                  <Box>
                    <select
                      className="select2"
                      style={{ width: "100%", marginBottom: "5px" }}
                    >
                      <option
                        style={{ fontFamily: "SF Pro Text", fontSize: "13px" }}
                      >
                        1 passanger , Economy
                      </option>
                    </select>
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={valueSlider2}
                      onChange={handleChangeSlider2}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext2}
                      max={855859400}
                      min={26764800}
                    />
                  </Box>
                  <Stack
                    direction="row"
                    sx={{ width: "100%", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ fontSize: "11px" }}>
                      {sliderItem1.toLocaleString()}
                    </Typography>
                    <Typography sx={{ fontSize: "11px" }}>
                      {sliderItem2.toLocaleString()}
                    </Typography>
                  </Stack>
                  <Divider sx={{ my: 2 }} />
                  <Box>
                    <select
                      className="select2"
                      style={{ width: "100%", marginBottom: "5px" }}
                    >
                      <option>1 passanger , Economy</option>
                    </select>
                    <FormControl component="fieldset">
                      <FormGroup aria-label="position">
                        <FormControlLabel
                          value="end"
                          control={
                            <Checkbox
                              icon={<CheckBox />}
                              checkedIcon={<Checked />}
                            />
                          }
                          label={
                            <p
                              style={{
                                fontSize: "11px",
                                fontFamily: "SF Pro Text",
                              }}
                            >
                              Emirates Airline
                            </p>
                          }
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="end"
                          control={
                            <Checkbox
                              icon={<CheckBox />}
                              checkedIcon={<Checked />}
                            />
                          }
                          label={
                            <p
                              style={{
                                fontSize: "11px",
                                fontFamily: "SF Pro Text",
                              }}
                            >
                              Fliy Dubai
                            </p>
                          }
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="end"
                          control={
                            <Checkbox
                              icon={<CheckBox />}
                              checkedIcon={<Checked />}
                            />
                          }
                          label={
                            <p
                              style={{
                                fontSize: "11px",
                                fontFamily: "SF Pro Text",
                              }}
                            >
                              Qatar Airways
                            </p>
                          }
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="end"
                          control={
                            <Checkbox
                              icon={<CheckBox />}
                              checkedIcon={<Checked />}
                            />
                          }
                          label={
                            <p
                              style={{
                                fontSize: "11px",
                                fontFamily: "SF Pro Text",
                              }}
                            >
                              Turkish Airlines
                            </p>
                          }
                          labelPlacement="end"
                        />
                      </FormGroup>
                    </FormControl>
                  </Box>
                </Stack>
                <Button
                  variant="contained"
                  sx={{
                    fontFamily: "SF Pro Text",
                    fontSize: "11px",
                    width: "100%",
                    bgcolor: "#143D61",
                    color: "#ffff",
                    ":hover": { bgcolor: "#143D61" },
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderTopLeftRadius: "0",
                    borderTopRightRadius: "0",
                  }}
                >
                  clear all flter
                </Button>
              </Box>
              <Box className="main" sx={{ width: { xs: "100%", md: "auto" } }}>
                <Stack
                  className="first-top-box"
                  direction="row"
                  sx={{
                    width: { md: "600px", xs: "100%", lg: "901px" },
                    bgcolor: "#FFFFFF",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 1,
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { md: "14px", xs: "10px" },
                      fontFamily: "SF Pro Text",
                    }}
                  >
                    Tehran ( IKA ) To Najaf ( NJF )
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", sm: "11px" },
                      fontFamily: "SF Pro Text",
                      bgcolor: "#EFDBBD",
                      p: { xs: "2px", sm: 1 },
                      borderRadius: "8px",
                    }}
                  >
                    Price Calandr &nbsp;
                    <PriceCalender />
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <select className="select1" style={{ marginRight: "15px" }}>
                      <option>Sort By</option>
                    </select>
                    <Stack direction="row">
                      <Typography
                        sx={{
                          width: { xs: "15px", sm: "35px" },
                          bgcolor: "#EFDBBD",
                          height: "35px",
                          borderRadius: "4px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "4px",
                          cursor: "pointer",
                        }}
                      >
                        <LeftIcon />
                      </Typography>
                      <Typography
                        variant="contained"
                        sx={{
                          bgcolor: "#EFDBBD",
                          width: { xs: "15px", sm: "35px" },
                          borderRadius: "4px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        <RightIcon />
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
                <Horizontal />
                <VerticalBox />
                <VerticalBox />
                <VerticalBox />
                <VerticalBox />
                <VerticalBox />
              </Box>
            </Stack>
          </Box>
        </Box>
      </nav>
    </ThemeProvider>
  );
};

export default ResultNav;
