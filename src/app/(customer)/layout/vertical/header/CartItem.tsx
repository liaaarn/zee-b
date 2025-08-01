"use client";
import {
  Box,
  Typography,
  Avatar,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import Link from "next/link";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";

// import { useSelector, useDispatch } from "@/store/hooks";
// import { increment, decrement } from "@/store/apps/eCommerce/ECommerceSlice";
// import { AppState } from "@/store/store";
// const dispatch = useDispatch();
// const Cartproduct = useSelector((state: AppState) => state.ecommerceReducer.cart);

// const Increase = (productId: string) => {
//   dispatch(increment(productId));
// };

// const Decrease = (productId: string) => {
//   dispatch(decrement(productId));
// };

const CartItems = () => {
  // Contoh data dummy untuk testing visual (hapus jika sudah pakai Redux)
  const Cartproduct = [
    {
      id: "1",
      title: "Paket Nasi Ayam Goreng",
      category: "Makanan",
      price: 17500,
      qty: 2,
      photo: "/images/fotomenu1.jpg",
    },
    {
      id: "18",
      title: "Teh Manis Dingin / Panas",
      category: "Minuman",
      price: 5000,
      qty: 1,
      photo: "/images/minuman1.jpg",
    },
  ];

  return (
    <Box px={3}>
      {Cartproduct.length > 0 ? (
        <>
          {Cartproduct.map((product: any, index: number) => (
            <Box key={product.id + index}>
              <Stack direction="row" spacing={2} py={3}>
                <Avatar
                  src={product.photo}
                  alt={product.title}
                  sx={{
                    borderRadius: "10px",
                    height: "75px",
                    width: "95px",
                  }}
                />
                <Box>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {product.title}
                  </Typography>
                  <Typography fontSize="12px" color="text.secondary">
                    {product.category}
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    mt="5px"
                  >
                    <Typography variant="subtitle2" fontWeight="500">
                      Rp {product.price * product.qty}
                    </Typography>
                    <ButtonGroup size="small" aria-label="qty controls">
                      <Button
                        color="success"
                        variant="text"
                        // onClick={() => Decrease(product.id)}
                        disabled={product.qty < 2}
                      >
                        <IconMinus stroke={1.5} size="0.8rem" />
                      </Button>
                      <Button
                        color="inherit"
                        sx={{ bgcolor: "transparent", color: "text.secondary" }}
                        variant="text"
                      >
                        {product.qty}
                      </Button>
                      <Button
                        color="success"
                        variant="text"
                        // onClick={() => Increase(product.id)}
                      >
                        <IconPlus stroke={1.5} size="0.8rem" />
                      </Button>
                    </ButtonGroup>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          ))}
        </>
      ) : (
        <Box textAlign="center" mb={3}>
          <Image
            src="/images/products/empty-shopping-cart.svg"
            alt="cart"
            width={200}
            height={200}
          />
          <Typography variant="h5" mb={2}>
            Cart is Empty
          </Typography>
          <Button
            component={Link}
            href="/apps/ecommerce/shop"
            variant="contained"
          >
            Go back to Shopping
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CartItems;
