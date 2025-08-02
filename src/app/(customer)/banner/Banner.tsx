// import React from "react";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import { Theme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { styled } from "@mui/material/styles";
// import BannerContent from "./BannerContent";
// import banner1 from "../../../../public/images/banner1.png";
// import banner2 from "../../../../public/images/banner2.png";
// import Image from "next/image";

// const Banner = () => {
//   const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

//   const SliderBox = styled(Box)(() => ({
//     "@keyframes slideup": {
//       "0%": {
//         transform: "translate3d(0, 0, 0)",
//       },
//       "100% ": {
//         transform: "translate3d(0px, -100%, 0px)",
//       },
//     },

//     animation: "slideup 35s linear infinite",
//   }));

//   const SliderBox2 = styled(Box)(() => ({
//     "@keyframes slideDown": {
//       "0%": {
//         transform: "translate3d(0, -100%, 0)",
//       },
//       "100% ": {
//         transform: "translate3d(0px, 0, 0px)",
//       },
//     },

//     animation: "slideDown 35s linear infinite",
//   }));

//   return (
//     <Box mb={10} sx={{ overflow: "hidden" }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={3} alignItems="center">
//           <Grid item xs={12} lg={6} sm={8}>
//             <BannerContent />
//           </Grid>
//           {lgUp ? (
//             <Grid item xs={12} lg={6}>
//               <Box
//                 p={3.2}
//                 sx={{
//                   backgroundColor: (theme) => theme.palette.primary.light,
//                   minWidth: "2000px",
//                   height: "calc(100vh - 100px)",
//                   maxHeight: "790px",
//                 }}
//               >
//                 <Stack direction={"row"}>
//                   <Box>
//                     <SliderBox>
//                       <Image src={banner1} alt="banner" priority />
//                     </SliderBox>
//                     <SliderBox>
//                       <Image src={banner1} alt="banner" priority />
//                     </SliderBox>
//                   </Box>
//                   <Box>
//                     <SliderBox2>
//                       <Image src={banner2} alt="banner" priority />
//                     </SliderBox2>
//                     <SliderBox2>
//                       <Image src={banner2} alt="banner" priority />
//                     </SliderBox2>
//                   </Box>
//                 </Stack>
//               </Box>
//             </Grid>
//           ) : null}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Banner;

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import BannerContent from "./BannerContent";
import banner1 from "../../../../public/images/banner1.png";
import banner2 from "../../../../public/images/banner2.png";
import Image from "next/image";

const Banner = () => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  const SliderBox = styled(Box)(() => ({
    "@keyframes slideup": {
      "0%": {
        transform: "translate3d(0, 0, 0)",
      },
      "100%": {
        transform: "translate3d(0px, -100%, 0px)",
      },
    },
    animation: "slideup 30s linear infinite",
  }));

  const SliderBox2 = styled(Box)(() => ({
    "@keyframes slideDown": {
      "0%": {
        transform: "translate3d(0, -100%, 0)",
      },
      "100%": {
        transform: "translate3d(0px, 0, 0px)",
      },
    },
    animation: "slideDown 30s linear infinite",
  }));

  return (
    <Box mb={10} sx={{ overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          {/* Konten kiri */}
          <Grid item xs={12} md={6}>
            <BannerContent />
          </Grid>

          {/* Banner kanan */}
          {lgUp && (
            <Grid item xs={12} md={6}>
              <Box
                p={4}
                sx={{
                  borderRadius: 4,
                  backgroundColor: (theme) => theme.palette.primary.light,
                  height: 900,
                  maxHeight: 720,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack direction="row" spacing={4}>
                  <Box>
                    <SliderBox>
                      <Image
                        src={banner1}
                        alt="banner"
                        width={290}
                        height={420}
                        priority
                      />
                    </SliderBox>
                    <SliderBox>
                      <Image
                        src={banner1}
                        alt="banner"
                        width={290}
                        height={420}
                        priority
                      />
                    </SliderBox>
                  </Box>
                  <Box>
                    <SliderBox2>
                      <Image
                        src={banner2}
                        alt="banner"
                        width={290}
                        height={420}
                        priority
                      />
                    </SliderBox2>
                    <SliderBox2>
                      <Image
                        src={banner2}
                        alt="banner"
                        width={290}
                        height={420}
                        priority
                      />
                    </SliderBox2>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
