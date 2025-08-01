"use client";
import React, { useState } from "react";
import { sum } from "lodash";
import { IconShoppingCart, IconX } from "@tabler/icons-react";
import {
  Box,
  Typography,
  Badge,
  Drawer,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import Link from "next/link";
import CartItems from "./CartItem";
import BasicIcons from "@/app/(customer)/checkout/page";

// import { useSelector } from "@/store/hooks";
// import { AppState } from "@/store/store";

// Dummy cart data (ganti ini jika Redux sudah aktif)
const dummyCart = [
  { id: "1", title: "Paket Nasi Ayam Goreng", price: 17500, qty: 2 },
  { id: "18", title: "Teh Manis Dingin / Panas", price: 5000, qty: 1 },
];

const Cart = () => {
  // Redux (commented while using dummy)
  // const Cartproduct = useSelector((state: AppState) => state.ecommerceReducer.cart);
  // const checkout = useSelector((state: AppState) => state.ecommerceReducer.cart);

  const Cartproduct = dummyCart;
  const checkout = dummyCart;

  const bcount = Cartproduct.length > 0 ? Cartproduct.length : "0";
  const total = sum(checkout.map((product) => product.price * product.qty));

  const [showDrawer, setShowDrawer] = useState(false);
  const handleDrawerClose = () => setShowDrawer(false);

  const cartContent = (
    <Box>
      {/* ------------------------------------------- */}
      {/* Cart Content */}
      {/* ------------------------------------------- */}
      <Box>
        <CartItems />
      </Box>
    </Box>
  );

  return (
    <Box>
      <IconButton
        size="large"
        color="inherit"
        onClick={() => setShowDrawer(true)}
        sx={{
          color: "text.secondary",
          ...(showDrawer && {
            color: "primary.main",
          }),
        }}
      >
        <Badge color="error" badgeContent={bcount}>
          <IconShoppingCart size="21" stroke="1.5" />
        </Badge>
      </IconButton>

      {/* ------------------------------------------- */}
      {/* Cart Sidebar */}
      {/* ------------------------------------------- */}
      <Drawer
        anchor="right"
        open={showDrawer}
        onClose={handleDrawerClose}
        PaperProps={{ sx: { maxWidth: "500px" } }}
      >
        <Box
          display="flex"
          alignItems="center"
          p={3}
          pb={0}
          justifyContent="space-between"
        >
          <Typography variant="h5" fontWeight={600}>
            Keranjang
          </Typography>
          <IconButton
            color="inherit"
            onClick={handleDrawerClose}
            sx={{ color: (theme) => theme.palette.grey.A200 }}
          >
            <IconX size="1rem" />
          </IconButton>
        </Box>

        {/* component */}
        {cartContent}

        {/* ------------------------------------------- */}
        {/* Checkout */}
        {/* ------------------------------------------- */}
        <Box px={3} mt={2}>
          {Cartproduct.length > 0 && (
            <>
              <Stack direction="row" justifyContent="space-between" mb={3}>
                <Typography variant="subtitle2" fontWeight={400}>
                  Total
                </Typography>
                <Typography variant="subtitle2" fontWeight={600}>
                  Rp {total}
                </Typography>
              </Stack>
              <Button
                fullWidth
                component={Link}
                href="/checkout"
                variant="contained"
                color="primary"
              >
                Pesan
              </Button>
            </>
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Cart;
