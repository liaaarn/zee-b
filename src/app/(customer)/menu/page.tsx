"use client";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import PageContainer from "@/app/components/container/PageContainer";
import DashboardCard from "@/app/components/shared/DashboardCard";
import React from "react";
import { format } from "date-fns";
import NextLink from "next/link";
import BlankCard from "../../components/shared/BlankCard";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { IconEye, IconMessage2, IconPoint } from "@tabler/icons-react";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import EcommerceDetail from "./detail1/page";

// Data array menu
const menuFavorit: MenuFavorit[] = [
  {
    id: 1,
    title: "Paket Nasi Ayam Goreng",
    slug: "detail1",
    excerpt: "Nasi + Ayam + Tahu + Tempe + Asin + Sambal + Lalap.",
    coverImage: "/images/fotomenu1.jpg",
  },
  {
    id: 2,
    title: "Paket Nasi Ikan Mujair Goreng",
    slug: "detail2",
    excerpt: "Nasi + Ikan mujair + Tahu + Tempe + Sambal + Lalap.",
    coverImage: "/images/fotomenu2.jpg",
  },
  {
    id: 3,
    title: "Paket Berbuka",
    slug: "detail3",
    excerpt:
      "3 Ayam bakar + 2 Nasi + 2 Tahu Tempe + Asin + Sambal + Lalap (Free 2 teh manis)",
    coverImage: "/images/fotomenu3.jpg",
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
  {
    id: 6,
    title: "Paket Nasi Cikur",
    slug: "detail6",
    excerpt: "Nasi cikur + Telur dadar + Tahu + Tempe + Asin + Sambal + Lalap",
    coverImage: "/images/fotomenu3.jpg",
  },
];

const paketNasi: PaketNasi[] = [
  {
    id: 7,
    title: "Paket Nasi Ayam Goreng",
    slug: "detail7",
    excerpt: "Nasi + Ayam + Tahu + Tempe + Asin + Sambal + Lalap",
    coverImage: "/images/fotomenu1.jpg",
  },
  {
    id: 8,
    title: "Paket Nasi Ikan Mujair Goreng",
    slug: "detail8",
    excerpt: "Nasi + Ikan mujair + Tahu + Tempe + Sambal + Lalap",
    coverImage: "/images/fotomenu2.jpg",
  },
  {
    id: 9,
    title: "Paket Nasi TO komplit",
    slug: "detail9",
    excerpt: "Nasi TO + Telur dadar + Tahu + Tempe + Asin + Sambal + Lalap",
    coverImage: "/images/fotomenu3.jpg",
  },
  {
    id: 10,
    title: "Paket Hemat",
    slug: "detail10",
    excerpt: "Nasi + Telur dadar + Tahu + Sambal + Lalap",
    coverImage: "/images/fotomenu1.jpg",
  },

  {
    id: 11,
    title: "Paket Nasi Kulit Ayam Goreng",
    slug: "detail11",
    excerpt: "Nasi + Kulit ayam + Tahu + Tempe + Asin + Sambal + Lalap",
    coverImage: "/images/fotomenu2.jpg",
  },
  {
    id: 12,
    title: "Nasi Goreng",
    slug: "detail12",
    excerpt: "Nasi goreng",
    coverImage: "/images/fotomenu3.jpg",
  },
];

const menuTambahan: MenuTambahan[] = [
  {
    id: 13,
    title: "Tahu Goreng",
    slug: "detail13",
    excerpt: "Tahu goreng",
    coverImage: "/images/fotomenu1.jpg",
  },
  {
    id: 14,
    title: "Tempe Goreng",
    slug: "detail14",
    excerpt: "Tempe goreng",
    coverImage: "/images/fotomenu2.jpg",
  },
  {
    id: 15,
    title: "Nasi Putih",
    slug: "detail15",
    excerpt: "Nasi putih",
    coverImage: "/images/fotomenu3.jpg",
  },
  {
    id: 16,
    title: "Goreng Ayam",
    slug: "detail16",
    excerpt: "Goreng ayam",
    coverImage: "/images/fotomenu1.jpg",
  },

  {
    id: 17,
    title: "Goreng Mujair",
    slug: "detail17",
    excerpt: "Goreng mujair",
    coverImage: "/images/fotomenu2.jpg",
  },
];

const minuman: Minuman[] = [
  {
    id: 18,
    title: "Teh Manis Dingin / Panas",
    slug: "detail18",
    excerpt: "Teh manis dingin / panas",
    coverImage: "/images/minuman1.jpg",
  },
  {
    id: 19,
    title: "Jus Jeruk",
    slug: "detail19",
    excerpt: "Jus jeruk",
    coverImage: "/images/minuman3.jpg",
  },
  {
    id: 20,
    title: "Jus Tomat",
    slug: "detail20",
    excerpt: "Jus tomat",
    coverImage: "/images/minuman1.jpg",
  },
  {
    id: 21,
    title: "Kopi Capucino Dingin / Panas",
    slug: "detail21",
    excerpt: "Kopi capucino dingin / panas",
    coverImage: "/images/minuman2.jpg",
  },
  {
    id: 22,
    title: "Sop Buah",
    slug: "detail22",
    excerpt: "Sop buah",
    coverImage: "/images/minuman3.jpg",
  },
];

type MenuFavorit = {
  id?: number;
  title?: string;
  slug?: string;
  excerpt?: string;
  coverImage?: string;
};

type PaketNasi = {
  id?: number;
  title?: string;
  slug?: string;
  excerpt?: string;
  coverImage?: string;
};

type MenuTambahan = {
  id?: number;
  title?: string;
  slug?: string;
  excerpt?: string;
  coverImage?: string;
};

type Minuman = {
  id?: number;
  title?: string;
  slug?: string;
  excerpt?: string;
  coverImage?: string;
};

export default function Menu() {
  const theme = useTheme();

  return (
    <PageContainer title="Zee&B" description="Zee&B">
      {/* Banner Image */}
      <div
        style={{
          width: "100%",
          position: "relative",
          height: "250px",
          marginBottom: "1.5rem",
        }}
      >
        <Image
          src="/images/foto.jpg"
          alt="Banner Image"
          fill
          style={{ objectFit: "cover", borderRadius: "12px" }}
          priority
        />
      </div>

      <Typography variant="h5" sx={{ mb: 3 }}>
        Resto's Top Picks
      </Typography>

      <Grid container spacing={4}>
        {menuFavorit.map((blog) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={blog.id}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 2,
                boxShadow: 2,
                overflow: "hidden",
                bgcolor: "background.paper",
              }}
            >
              <Box sx={{ height: 200, position: "relative" }}>
                <CardMedia
                  component="img"
                  image={blog.coverImage}
                  alt="Blog cover"
                  sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </Box>

              <CardContent
                sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
              >
                <Typography
                  variant="h6"
                  component={NextLink}
                  href={`/menu/${blog.slug}`}
                  sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
                >
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.excerpt}
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
        Paket Nasi
      </Typography>
      <Grid container spacing={3}>
        {paketNasi.map((blog) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={blog.id}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 2,
                boxShadow: 2,
                overflow: "hidden",
                bgcolor: "background.paper",
              }}
            >
              <Box sx={{ height: 200, position: "relative" }}>
                <CardMedia
                  component="img"
                  image={blog.coverImage}
                  alt="Blog cover"
                  sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </Box>

              <CardContent
                sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
              >
                <Typography
                  variant="h6"
                  component={NextLink}
                  href={`/menu/${blog.slug}`}
                  sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
                >
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.excerpt}
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
        Menu Tambahan
      </Typography>
      <Grid container spacing={3}>
        {menuTambahan.map((blog) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={blog.id}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 2,
                boxShadow: 2,
                overflow: "hidden",
                bgcolor: "background.paper",
              }}
            >
              <Box sx={{ height: 200, position: "relative" }}>
                <CardMedia
                  component="img"
                  image={blog.coverImage}
                  alt="Blog cover"
                  sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </Box>

              <CardContent
                sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
              >
                <Typography
                  variant="h6"
                  component={NextLink}
                  href={`/menu/${blog.slug}`}
                  sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
                >
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.excerpt}
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
        Minuman
      </Typography>
      <Grid container spacing={3}>
        {minuman.map((blog) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={blog.id}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 2,
                boxShadow: 2,
                overflow: "hidden",
                bgcolor: "background.paper",
              }}
            >
              <Box sx={{ height: 200, position: "relative" }}>
                <CardMedia
                  component="img"
                  image={blog.coverImage}
                  alt="Blog cover"
                  sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </Box>

              <CardContent
                sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
              >
                <Typography
                  variant="h6"
                  component={NextLink}
                  href={`/menu/${blog.slug}`}
                  sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
                >
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.excerpt}
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
}
