// "use client";
// import Grid from "@mui/material/Grid";
// // import ProductCarousel from "@/app/components/apps/ecommerce/productDetail/ProductCarousel";
// // import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
// import PageContainer from "@/app/components/container/PageContainer";
// // import ProductDetail from "@/app/components/apps/ecommerce/productDetail";
// // import ProductDesc from "@/app/components/apps/ecommerce/productDetail/ProductDesc";
// // import ProductRelated from "@/app/components/apps/ecommerce/productDetail/ProductRelated";
// import ChildCard from "@/app/components/shared/ChildCard";

// const BCrumb = [
//   {
//     to: "/",
//     title: "Home",
//   },
//   {
//     title: "Shop",
//     to: "/apps/ecommerce/shop",
//   },
//   {
//     title: "detail",
//   },
// ];

// const EcommerceDetail = () => {
//   return (
//     <PageContainer
//       title="eCommerce Detail"
//       description="this is eCommerce Detail"
//     >
//       {/* breadcrumb */}
//       {/* <Breadcrumb title="Product Detail" items={BCrumb} /> */}
//       <Grid
//         container
//         spacing={3}
//         sx={{ maxWidth: { lg: "1055px", xl: "1200px" } }}
//       >
//         <Grid item xs={12} sm={12} lg={12}>
//           <ChildCard>
//             {/* ------------------------------------------- */}
//             {/* Carousel */}
//             {/* ------------------------------------------- */}
//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={12} lg={6}>
//                 {/* <ProductCarousel /> */}
//               </Grid>
//               <Grid item xs={12} sm={12} lg={6}>
//                 {/* <ProductDetail /> */}
//               </Grid>
//             </Grid>
//           </ChildCard>
//         </Grid>
//         <Grid item xs={12} sm={12} lg={12}>
//           {/* <ProductDesc /> */}
//         </Grid>
//         <Grid item xs={12} sm={12} lg={12}>
//           {/* <ProductRelated /> */}
//         </Grid>
//       </Grid>
//     </PageContainer>
//   );
// };

// export default EcommerceDetail;

"use client";

import Grid from "@mui/material/Grid";
import PageContainer from "@/app/components/container/PageContainer";
import ChildCard from "@/app/components/shared/ChildCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useState } from "react";
import { Stack } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import { TextField } from "@mui/material";
import BlankCard from "@/app/components/shared/BlankCard";
import NextLink from "next/link";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const menuFavorit: MenuFavorit[] = [
  {
    id: 1,
    title: "Paket Nasi Ayam Goreng",
    slug: "detail1",
    excerpt: "Nasi + Ayam + Tahu + Tempe + Asin + Sambal + Lalap.",
    coverImage: "/images/fotomenu1.jpg",
  },
  {
    id: 4,
    title: "Paket Nasi Ayam Bakar",
    slug: "detail4",
    excerpt: "Nasi + Ayam bakar + Tahu + Tempe + Asin + Sambal + Lalap",
    coverImage: "/images/fotomenu1.jpg",
  },
  {
    id: 5,
    title: "Paket Nasi Bakar Mujair",
    slug: "detail5",
    excerpt: "Nasi + Bakar mujair + Tahu + Tempe + Sambal + Lalap",
    coverImage: "/images/fotomenu2.jpg",
  },
];

type MenuFavorit = {
  id?: number;
  title?: string;
  slug?: string;
  excerpt?: string;
  coverImage?: string;
};

const EcommerceDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <PageContainer title="Zee&B" description="Zee&B">
      <Grid
        container
        spacing={3}
        sx={{ maxWidth: { lg: "1055px", xl: "1200px" } }}
      >
        <Grid item xs={12}>
          <ChildCard>
            {/* Dummy Product Header */}
            <Grid container spacing={3}>
              {/* Left: Gambar Produk */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    width: "100%",
                    height: 300,
                    position: "relative",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/fotomenu2.jpg"
                    alt="Paket Nasi Ikan Mujair"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Grid>

              {/* Right: Info Produk */}
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>
                  Paket Nasi Ikan Mujair Goreng
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Nikmati ikan mujair goreng khas dengan bumbu rempah spesial
                  yang meresap sempurna.
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                  Rp 17.500
                </Typography>
                <Box mt={4}>
                  {/* <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    QTY:
                  </Typography> */}

                  <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton
                      onClick={handleDecrease}
                      sx={{ border: "1px solid #90caf9" }}
                    >
                      <RemoveIcon sx={{ color: "#42a5f5" }} />
                    </IconButton>

                    <TextField
                      size="small"
                      value={quantity}
                      inputProps={{
                        readOnly: true,
                        style: { textAlign: "center", width: 30 },
                      }}
                    />

                    <IconButton
                      onClick={handleIncrease}
                      sx={{ border: "1px solid #90caf9" }}
                    >
                      <AddIcon sx={{ color: "#42a5f5" }} />
                    </IconButton>
                  </Stack>

                  {/* Tombol Aksi */}
                  <Stack direction="row" spacing={2} mt={3}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#5c85ff",
                        borderRadius: "8px",
                        textTransform: "none",
                      }}
                    >
                      Beli
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#ff8666",
                        borderRadius: "8px",
                        textTransform: "none",
                      }}
                    >
                      Tambahkan ke keranjang
                    </Button>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </ChildCard>
        </Grid>

        {/* Deskripsi Produk */}
        <Grid item xs={12}>
          <ChildCard>
            <Typography variant="h6" gutterBottom>
              Deskripsi Produk
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">
              Paket ini terdiri dari ikan mujair goreng, nasi, lalapan segar,
              sambal, tahu, dan tempe. Sangat cocok untuk makan siang maupun
              malam.
            </Typography>
          </ChildCard>
        </Grid>

        {/* Produk Terkait */}
        <Grid item xs={12}>
          <ChildCard>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Menu Terkait
            </Typography>

            <Grid container spacing={3}>
              {menuFavorit.map((blog) => (
                <Grid item xs={12} sm={6} md={4} key={blog.id}>
                  <BlankCard className="hoverCard">
                    <div>
                      <Typography
                        component={NextLink}
                        href={`/menu/${blog.slug}`}
                      >
                        <CardMedia
                          component="img"
                          height="200"
                          image={blog.coverImage}
                          alt="Blog cover"
                        />
                      </Typography>

                      <CardContent>
                        <Box my={2}>
                          <Typography
                            gutterBottom
                            variant="h6"
                            color="inherit"
                            sx={{ textDecoration: "none" }}
                            component={NextLink}
                            href={`/menu/${blog.slug}`}
                          >
                            {blog.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {blog.excerpt}
                          </Typography>
                        </Box>
                      </CardContent>
                    </div>
                  </BlankCard>
                </Grid>
              ))}
            </Grid>
          </ChildCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default EcommerceDetail;
