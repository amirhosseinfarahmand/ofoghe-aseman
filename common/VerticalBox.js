import { Divider, Typography, Box, Stack } from "@mui/material";
import React from "react";
import { BirdLogo, LogoPlain } from "../icon/logo";
import image from "../public/logoPlane2.png";
import Image from "next/dist/client/image";

const VerticalBox = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        mt: 2,
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      <Stack
        direction="row"
        sx={{
          bgcolor: "#FFFFFF",
          justifyContent: "space-between",
          width: "100%",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          p: 2,
          boxShadow: "1px 1px 1px gray",
        }}
      >
        <Box>
          <Image src={image} width={20} height={20} />
          <Stack sx={{ mt: 4 }}>
            <Typography sx={{ fontSize: "24px" }}>08 : 45</Typography>
            <Typography variant="subtitle1" sx={{ color: "#707070" }}>
              Tehran ( IKA )
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Typography sx={{ color: "#707070" }}>1 H 30 Min</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Divider
              sx={{
                width: { xs: "auto", sm: "200px" },
                height: "1px",
                bgcolor: "#424242",
              }}
            />
            &nbsp;
            <LogoPlain />
          </Box>
        </Box>
        <Box>
          <Stack direction="row" spacing={1}>
            <Typography
              sx={{
                bgcolor: "#EFDBBD",
                borderRadius: "10px",
                p: 1,
                fontSize: "10px",
              }}
            >
              Economy Class
            </Typography>
            <Typography
              sx={{
                bgcolor: "#EFDBBD",
                borderRadius: "10px",
                p: 1,
                fontSize: "10px",
              }}
            >
              Charter
            </Typography>
          </Stack>
          <Stack sx={{ mt: 3 }}>
            <Typography sx={{ fontSize: "24px" }}>10 : 15</Typography>
            <Typography variant="subtitle1" sx={{ color: "#707070" }}>
              Najaf ( IKA )
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Stack
        sx={{
          alignItems: "center",
          p: 2,
          bgcolor: "#143D61",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          boxShadow: "1px 1px 1px gray",
        }}
      >
        <Typography color="snow" sx={{ fontFamily: "SF Pro Text" }}>
          Total Price
        </Typography>
        <Typography
          color="snow"
          sx={{ fontSize: "22px", fontFamily: "SF Pro Text" }}
        >
          233,222,222 IRR
        </Typography>
        <Box sx={{ display: "flex", mt: 1 }}>
          <Typography
            sx={{
              bgcolor: "#EFDBBD",
              borderRadius: "10px",
              p: 1,
              width: "100px",
              textAlign: "center",
              height: "40px",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "SF Pro Text",
            }}
          >
            Flight Details
          </Typography>
          <Typography
            color="snow"
            sx={{
              bgcolor: "#EB0000",
              borderRadius: "10px",
              p: 1,
              width: "100px",
              textAlign: "center",
              height: "40px",
              fontSize: "18px",
              fontFamily: "SF Pro Text",
            }}
          >
            Book
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default VerticalBox;
