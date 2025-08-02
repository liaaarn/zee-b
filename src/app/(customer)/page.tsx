// "use client";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import PageContainer from "@/app/components/container/PageContainer";
// // components
// import SalesOverview from "@/app/components/dashboard/SalesOverview";
// import YearlyBreakup from "@/app/components/dashboard/YearlyBreakup";
// import RecentTransactions from "@/app/components/dashboard/RecentTransactions";
// import ProductPerformance from "@/app/components/dashboard/ProductPerformance";
// import Blog from "@/app/components/dashboard/Blog";
// import MonthlyEarnings from "@/app/components/dashboard/MonthlyEarnings";

// export default function Dashboard() {
//   return (
//     <PageContainer title="Dashboard" description="this is Dashboard">
//       <Box mt={3}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} lg={8}>
//             <SalesOverview />
//           </Grid>
//           <Grid item xs={12} lg={4}>
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <YearlyBreakup />
//               </Grid>
//               <Grid item xs={12}>
//                 <MonthlyEarnings />
//               </Grid>
//             </Grid>
//           </Grid>
//           <Grid item xs={12} lg={4}>
//             <RecentTransactions />
//           </Grid>
//           <Grid item xs={12} lg={8}>
//             <ProductPerformance />
//           </Grid>
//           <Grid item xs={12}>
//             <Blog />
//           </Grid>
//         </Grid>
//       </Box>
//     </PageContainer>
//   );
// }

"use client";

import React from "react";
import PageContainer from "@/app/components/container/PageContainer";

// components
import Banner from "@/app/(customer)/banner/Banner";
// import C2a from "@/app/components/landingpage/c2a/C2a";
// import C2a2 from "@/app/components/landingpage/c2a/C2a2";
// import DemoSlider from "@/app/components/landingpage/demo-slider/DemoSlider";
// import Features from "@/app/components/landingpage/features/Features";
// import Footer from "@/app/components/landingpage/footer/Footer";
// import Frameworks from "@/app/components/landingpage/frameworks/Frameworks";
// import LpHeader from "@/app/components/landingpage/header/Header";
// import Testimonial from "@/app/components/landingpage/testimonial/Testimonial";

const LandingPage = () => {
  return (
    <PageContainer title="Zee&B" description="Zee&B">
      <Banner />
    </PageContainer>
  );
};

LandingPage.hidelayout = true;

export default LandingPage;
