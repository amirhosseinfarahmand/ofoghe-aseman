import { Stack, Box, Typography, Container } from "@mui/material";
import React from "react";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import localImage1 from "../public/pic1.png";
import localImage2 from "../public/pic2.png";
import localImage3 from "../public/pic3.png";

const Slider = () => {
  const items = [localImage1, localImage2, localImage3];
  const item = items.map((state) => (
    <Image src={state} alt="pic" width={340} height={250} />
  ));

  const responsive = {
    0: { items: 2 },
    568: { items: 4 },
  };

  return (
    <section>
      <Container sx={{ justifyContent: "center", display: "flex", my: 8 }}>
        <Stack
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#596167", fontFamily: "SF Pro Text" }}
          >
            Popular Routes
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#596167", fontFamily: "SF Pro Text" }}
          >
            Popular Destinations Open To Most Visitors From Dubai
          </Typography>
          <Box
            sx={{
              width: "100%",
              //   bgcolor: "red",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <AliceCarousel
              infinite
              mouseTracking
              autoPlayInterval={1000}
              animationDuration={1500}
              disableDotsControls
              responsive={responsive}
              //   renderNextButton={nextButton}
              autoPlay
              items={item}
              controlsStrategy="alternate"
            />
          </Box>
        </Stack>
      </Container>
    </section>
  );
};

export default Slider;
